// ** Theme Default Options ***********************************************************************

// Enable userchrome.css changes
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG color
user_pref("svg.context-properties.content.enabled", true);

// CSS Blur Filter
user_pref("layout.css.backdrop-filter.enabled", true);

// CSS's `:has()` selector #457
user_pref("layout.css.has-selector.enabled", true);


// ** Firefox UI Fix - Proton Related Options **********************************************************************

user_pref("userChrome.compatibility.theme", true);
user_pref("userChrome.compatibility.os", true);

user_pref("userChrome.theme.proton_color", true);
user_pref("userChrome.theme.proton_chrome", true);
user_pref("userChrome.theme.fully_color", true);
user_pref("userChrome.theme.fully_dark", true);

user_pref("userChrome.decoration.cursor", true);
user_pref("userChrome.decoration.field_border", true);
user_pref("userChrome.decoration.download_panel", true);

user_pref("userChrome.tab.multi_selected", true);
user_pref("userChrome.tab.unloaded", true);
user_pref("userChrome.tab.crashed", true);

user_pref("userChrome.icon.panel_full", true);
user_pref("userChrome.icon.panel", true);
user_pref("userChrome.icon.library", true);
user_pref("userChrome.icon.menu", true);
user_pref("userChrome.icon.menu.full", true);
user_pref("userChrome.icon.context_menu", true);
user_pref("userChrome.icon.global_menu", true);
user_pref("userChrome.icon.global_menubar", true);

user_pref("userContent.player.ui", true);
user_pref("userContent.player.icon", true);
user_pref("userContent.player.size", true);
user_pref("userContent.player.animate", true);
user_pref("userContent.player.click_to_play", true);

user_pref("userContent.page.field_border", true);
user_pref("userContent.page.illustration", true);
user_pref("userContent.page.proton_color", true);
user_pref("userContent.page.dark_mode", true);
user_pref("userContent.page.proton", true);


// ** Personal Options ****************************************************************************

// Mica
user_pref("widget.windows.mica", true);
user_pref("widget.windows.mica.toplevel-backdrop", 2);

// Smoothscroll
user_pref("mousewheel.default.delta_multiplier_y", 275);

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

// Profiles
user_pref("browser.profiles.enabled", true);

// Tab Grouping
user_pref("browser.tabs.groups.enabled", true);

// Bookmarks toolbar
user_pref("browser.toolbars.bookmarks.visibility", "always");
user_pref("browser.bookmarks.addedImportButton", false);


// ** Personal Tweaks *****************************************************************************

// Select one color scheme
user_pref("color_scheme.dark", false);
user_pref("color_scheme.nordic", false);
user_pref("color_scheme.mocha", false);
user_pref("color_scheme.tokyo", true);

// Select one accent color
user_pref("color_scheme.accent_moss", true);
user_pref("color_scheme.accent_frost", false);

// Apply my color scheme to some elements
user_pref("color_scheme.apply_tweaks", true);