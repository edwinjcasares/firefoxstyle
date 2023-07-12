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

user_pref("userChrome.compatibility.theme", true);
user_pref("userChrome.compatibility.os", true);

user_pref("userChrome.theme.proton_color", true);
user_pref("userChrome.theme.proton_chrome", true); // Need proton_color
user_pref("userChrome.theme.fully_color", true); // Need proton_color
user_pref("userChrome.theme.fully_dark", true); // Need proton_color

user_pref("userChrome.decoration.cursor", true);
user_pref("userChrome.decoration.field_border", true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate", true);

user_pref("userChrome.padding.tabbar_width", true);
user_pref("userChrome.padding.tabbar_height", true);
user_pref("userChrome.padding.toolbar_button", true);
user_pref("userChrome.padding.navbar_width", true);
user_pref("userChrome.padding.urlbar", true);
user_pref("userChrome.padding.bookmarkbar", true);
user_pref("userChrome.padding.infobar", true);
user_pref("userChrome.padding.menu", true);
user_pref("userChrome.padding.bookmark_menu", true);
user_pref("userChrome.padding.global_menubar", true);
user_pref("userChrome.padding.panel", true);
user_pref("userChrome.padding.popup_panel", true);

user_pref("userChrome.tab.multi_selected", true);
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
user_pref("userContent.player.size", true);
user_pref("userContent.player.animate", true);
user_pref("userContent.player.click_to_play", true);

user_pref("userContent.page.field_border", true);
user_pref("userContent.page.illustration", true);
user_pref("userContent.page.proton_color", true);
user_pref("userContent.page.dark_mode", true); // Need proton_color
user_pref("userContent.page.proton", true); // Need proton_color

user_pref("userChrome.hidden.tabbar", true);


// ** Linux Compatibility *************************************************************************

// Linux: Sidebar Hover fix
// user_pref("widget.gtk.ignore-bogus-leave-notify", 1);

// Linux's non native titlebar button
// user_pref("userChrome.compatibility.os.linux_non_native_titlebar_button", true);


// ** Personal Options ****************************************************************************

// Smoothscroll
user_pref("general.smoothScroll",                       true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y",      275);  // 250-400

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

// Windows: Ungroup taskbar icons per profile
user_pref("taskbar.grouping.useprofile", true);


// ** Personal Tweaks *****************************************************************************

// Select one color scheme
user_pref("color_scheme.dark", false);
user_pref("color_scheme.nordic", true);
user_pref("color_scheme.mocha", false);
user_pref("color_scheme.tokyo", false);

// Select one accent color
user_pref("color_scheme.accent_moss", false);
user_pref("color_scheme.accent_frost", true);

// Apply my color scheme to some elements
user_pref("color_scheme.apply_tweaks", true);