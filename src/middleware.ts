import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';

const SITEMAP_PATHS = new Set(['/sitemap.xml', '/sitemap-index.xml', '/sitemap-0.xml']);

function robotsTxt(origin: string): Response {
  const body = `User-agent: *
Allow: /

Disallow: /go/

Sitemap: ${origin}/sitemap.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  const destination = resolveCheckoutPathRedirect(pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }

  if (pathname === '/robots.txt' || pathname === '/robots.txt/') {
    return robotsTxt(url.origin);
  }

  const sitemapKey = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  if (SITEMAP_PATHS.has(sitemapKey)) {
    const runtime = context.locals.runtime as
      | { env?: { ASSETS?: { fetch: (request: Request) => Promise<Response> } } }
      | undefined;
    const assets = runtime?.env?.ASSETS;
    if (assets) {
      const assetResponse = await assets.fetch(new Request(url.toString(), context.request));
      if (assetResponse.status !== 404) {
        const headers = new Headers(assetResponse.headers);
        headers.set('Content-Type', 'application/xml; charset=utf-8');
        return new Response(assetResponse.body, {
          status: assetResponse.status,
          headers,
        });
      }
    }
  }

  return next();
});
