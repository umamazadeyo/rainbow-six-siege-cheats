import {
  REVIEWS_STORAGE_KEY,
  REVIEW_PRODUCT_LABELS,
  type CustomerReview,
  type ReviewProductFilter,
  averageRating,
} from '../data/reviews';

function starsForRating(rating: number): string {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return `${'★'.repeat(full)}${half ? '⯨' : ''}${'☆'.repeat(empty)}`;
}

function loadStoredReviews(): CustomerReview[] {
  try {
    const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CustomerReview[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStoredReviews(reviews: CustomerReview[]) {
  localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
}

function mergeReviews(seed: CustomerReview[]): CustomerReview[] {
  const stored = loadStoredReviews();
  const ids = new Set(seed.map((r) => r.id));
  const extra = stored.filter((r) => !ids.has(r.id));
  return [...extra, ...seed].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
}

function renderReviewCard(review: CustomerReview): HTMLElement {
  const article = document.createElement('article');
  article.className = 'review-card';
  article.dataset.reviewId = review.id;
  article.dataset.product = review.product;
  article.dataset.rating = String(review.rating);

  const verified = review.verifiedPurchase
    ? '<span class="reviews-verified">✓ Verified purchase</span>'
    : '';

  article.innerHTML = `
    <div class="review-card__meta">
      <div>
        <p class="review-card__name">${review.displayName}</p>
        <p class="review-card__product">${REVIEW_PRODUCT_LABELS[review.product]}</p>
      </div>
      <p class="review-card__date">${review.date}</p>
    </div>
    <p class="reviews-stars" aria-label="${review.rating} out of 5 stars">${starsForRating(review.rating)}</p>
    <p class="review-card__text"></p>
    ${verified}
  `;
  article.querySelector('.review-card__text')!.textContent = review.text;
  return article;
}

function updateSummary(root: HTMLElement, reviews: CustomerReview[]) {
  const avg = averageRating(reviews);
  const scoreEl = root.querySelector('[data-reviews-average]');
  const countEl = root.querySelector('[data-reviews-count]');
  const starsEl = root.querySelector('[data-reviews-average-stars]');
  if (scoreEl) scoreEl.textContent = avg.toFixed(1);
  if (countEl) countEl.textContent = String(reviews.length);
  if (starsEl) starsEl.textContent = starsForRating(avg);
}

function applyFilters(root: HTMLElement) {
  const product =
    root.querySelector<HTMLButtonElement>('[data-review-filter-product].is-active')?.dataset.reviewFilterProductValue ??
    'all';
  const rating =
    root.querySelector<HTMLButtonElement>('[data-review-filter-rating].is-active')?.dataset.reviewFilterRatingValue ??
    'all';

  root.querySelectorAll<HTMLElement>('[data-review-id]').forEach((card) => {
    const cardProduct = card.dataset.product ?? '';
    const cardRating = Number(card.dataset.rating ?? 0);
    const productOk = product === 'all' || cardProduct === product;
    let ratingOk = true;
    if (rating === '5') ratingOk = cardRating >= 5;
    else if (rating === '4') ratingOk = cardRating >= 4 && cardRating < 5;
    else if (rating === '3') ratingOk = cardRating >= 3 && cardRating < 4;
    card.toggleAttribute('data-hidden', !(productOk && ratingOk));
  });
}

export function setupReviewsPage(seed: CustomerReview[]) {
  const root = document.querySelector<HTMLElement>('[data-reviews-page]');
  if (!root) return;

  const list = root.querySelector('[data-reviews-list]');
  if (!list) return;

  let reviews = mergeReviews(seed);
  list.innerHTML = '';
  reviews.forEach((review) => list.appendChild(renderReviewCard(review)));
  updateSummary(root, reviews);

  root.querySelectorAll('[data-review-filter-product]').forEach((chip) => {
    chip.addEventListener('click', () => {
      root.querySelectorAll('[data-review-filter-product]').forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      applyFilters(root);
    });
  });

  root.querySelectorAll('[data-review-filter-rating]').forEach((chip) => {
    chip.addEventListener('click', () => {
      root.querySelectorAll('[data-review-filter-rating]').forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      applyFilters(root);
    });
  });

  const formPanel = root.querySelector<HTMLElement>('[data-reviews-form]');
  const toggleBtn = root.querySelector<HTMLButtonElement>('[data-reviews-form-toggle]');
  toggleBtn?.addEventListener('click', () => {
    if (!formPanel) return;
    const open = formPanel.hasAttribute('hidden');
    if (open) formPanel.removeAttribute('hidden');
    else formPanel.setAttribute('hidden', '');
    toggleBtn.textContent = open ? 'Close review form' : 'Write a Review';
  });

  const form = root.querySelector<HTMLFormElement>('[data-reviews-form-el]');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const displayName = String(fd.get('displayName') ?? '').trim();
    const product = String(fd.get('product') ?? 'website') as ReviewProductFilter;
    const rating = Number(fd.get('rating'));
    const text = String(fd.get('text') ?? '').trim();
    if (!displayName || !text || !rating) return;

    const review: CustomerReview = {
      id: `local-${Date.now()}`,
      displayName,
      product: product === 'all' ? 'website' : product,
      rating,
      date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
      isoDate: new Date().toISOString().slice(0, 10),
      text,
    };

    const stored = loadStoredReviews();
    stored.unshift(review);
    saveStoredReviews(stored);

    reviews = mergeReviews(seed);
    list.prepend(renderReviewCard(review));
    updateSummary(root, reviews);
    applyFilters(root);
    form.reset();
    formPanel?.setAttribute('hidden', '');
    if (toggleBtn) toggleBtn.textContent = 'Write a Review';
  });

  let selectedRating = 5;
  root.querySelectorAll('[data-review-rating-pick]').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedRating = Number((btn as HTMLButtonElement).dataset.reviewRatingPickValue);
      root.querySelectorAll('[data-review-rating-pick]').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const hidden = form?.querySelector<HTMLInputElement>('input[name="rating"]');
      if (hidden) hidden.value = String(selectedRating);
    });
  });
}
