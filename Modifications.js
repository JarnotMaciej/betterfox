// PREF: disable Firefox Sync
user_pref("identity.fxaccounts.enabled", false);

// PREF: disable the Firefox View tour from popping up
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");

// PREF: disable login manager
user_pref("signon.rememberSignons", false);

// PREF: disable address and credit card manager
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// PREF: enable HTTPS-Only Mode
// Warn me before loading sites that don't support HTTPS
// when using Private Browsing windows.
user_pref("dom.security.https_only_mode_pbm", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

// PREF: enable HTTPS-Only Mode
// Warn me before loading sites that don't support HTTPS
// when using Private Browsing windows.
user_pref("dom.security.https_only_mode_pbm", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

// PREF: delete cookies, cache, and site data on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown_v2.cache", true); // DEFAULT
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true); // DEFAULT
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false);