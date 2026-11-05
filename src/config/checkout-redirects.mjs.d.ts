export declare const R6_CHECKOUT_URL: string;
export declare const HWID_SPOOFER_CHECKOUT_URL: string;

export declare const CHECKOUT_URLS: {
  readonly r6: string;
  readonly skinChanger: string;
  readonly hwidSpoofer: string;
  readonly ugc: string;
};

export declare const CHECKOUT_PATH_REDIRECTS: ReadonlyMap<string, string>;

export declare function resolveCheckoutPathRedirect(pathname: string): string | null;
