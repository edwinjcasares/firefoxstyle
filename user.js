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

// ** Firefox UI Fix - Proton Related Options **********************************************************************

user_pref("userChrome.theme.proton_color", true);
user_pref("userChrome.theme.proton_chrome", true); // Need proton_color
user_pref("userChrome.theme.fully_color", true); // Need proton_color
user_pref("userChrome.theme.fully_dark", true); // Need proton_color

user_pref("userChrome.decoration.cursor", true);
user_pref("userChrome.decoration.field_border", true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate", true);

user_pref("userChrome.tab.letters_cleary", true);
user_pref("userChrome.tab.dynamic_separator", true);
user_pref("userChrome.tab.close_button_at_hover", true);
user_pref("userChrome.tab.sound_with_favicons", true);
user_pref("userChrome.tab.sound_hide_label", true);
user_pref("userChrome.tab.unloaded", true);
user_pref("userChrome.tab.crashed", true);
user_pref("userChrome.tab.pip", true);

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
user_pref("userContent.player.click_to_play", true);
user_pref("userContent.player.animate", true);

user_pref("userContent.page.illustration", true);
user_pref("userContent.page.proton_color", true);
user_pref("userContent.page.dark_mode", true); // Need proton_color
user_pref("userContent.page.proton", true); // Need proton_color

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

// Homepage NightTab URL
// user_pref("browser.startup.homepage", 'moz-extension://424099b9-dfe0-4452-8891-e459aee0bf8f/index.html');