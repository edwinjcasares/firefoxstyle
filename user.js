// ** Theme Default Options ***********************************************************************

// Enable userchrome.css changes
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG color
user_pref("svg.context-properties.content.enabled", true);

// CSS Color Mix
user_pref("layout.css.color-mix.enabled", true);

// CSS Blur Filter
user_pref("layout.css.backdrop-filter.enabled", true);

// CSS's `:has()` selector #457
user_pref("layout.css.has-selector.enabled", true);


// ** Personal Options ****************************************************************************

// Microphone indicator
user_pref("privacy.webrtc.legacyGlobalIndicator", false);

// Inspect Accessibility Properties
user_pref("devtools.accessibility.enabled", false);

// Pocket integration
user_pref("extensions.pocket.enabled", false);

// Native screenshots
user_pref("extensions.screenshots.disabled", true);

// Open PDFs directly
user_pref("browser.download.open_pdf_attachments_inline", true);

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

// Linux: Sidebar Hover fix
// user_pref("widget.gtk.ignore-bogus-leave-notify", 1);

// Windows: Ungroup taskbar icons per profile
user_pref("taskbar.grouping.useprofile", true);


// ** Personal Tweaks *****************************************************************************

// Select one color scheme
user_pref("color_scheme.darker", false);
user_pref("color_scheme.mocha", false);
user_pref("color_scheme.tokyo_night", true);

// Select one accent color
user_pref("color_scheme.accent_moss", false);
user_pref("color_scheme.accent_frost", true);

// Apply my color scheme to some elements
user_pref("color_scheme.apply_tweaks", true);