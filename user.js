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

// ** Natural Smooth Scrolling V4 "SHARP" *********************************************************

user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);//NSS    [120]
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);//NSS  [false]
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   200);//NSS   [1250]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       250);//NSS   [1000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           25);//NSS     [12]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     "2.0");//NSS    [1.3]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",      250);//NSS   [2000]
user_pref("general.smoothScroll.currentVelocityWeighting",             "1.0");//NSS ["0.25"]
user_pref("general.smoothScroll.stopDecelerationWeighting",            "1.0");//NSS  ["0.4"]

// ** Lepton Related Options **********************************************************************

user_pref("userChrome.theme.proton_color", true);
user_pref("userChrome.theme.proton_chrome", true); // Need proton_color
user_pref("userChrome.theme.fully_color", true); // Need proton_color
user_pref("userChrome.theme.fully_dark", true); // Need proton_color

user_pref("userChrome.decoration.cursor", true);
user_pref("userChrome.decoration.field_border", true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate", true);

user_pref("userChrome.tab.dynamic_separator", true);
user_pref("userChrome.tab.close_button_at_hover", true);
user_pref("userChrome.tab.sound_with_favicons", true);
user_pref("userChrome.tab.pip", true);
user_pref("userChrome.tab.container", true);
user_pref("userChrome.tab.crashed", true);

user_pref("userChrome.icon.panel_full", true);
user_pref("userChrome.icon.library", true);
user_pref("userChrome.icon.panel", true);
user_pref("userChrome.icon.menu", true);
user_pref("userChrome.icon.context_menu", true);
user_pref("userChrome.icon.global_menu", true);
user_pref("userChrome.icon.global_menubar", true);

user_pref("userContent.player.ui", true);
user_pref("userContent.player.click_to_play", true);
user_pref("userContent.player.animate", true);

user_pref("userContent.page.field_border", true);
user_pref("userContent.page.illustration", true);
user_pref("userContent.page.proton_color", true);
user_pref("userContent.page.dark_mode", true); // Need proton_color
user_pref("userContent.page.proton", true); // Need proton_color

user_pref("userChrome.hidden.tabbar", true);

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
// user_pref("browser.urlbar.unitConversion.enabled", true);

// Linux: Sidebar Hover fix
// user_pref("widget.gtk.ignore-bogus-leave-notify", 1);