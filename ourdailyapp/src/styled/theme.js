const rootStyles = {
  red: `#ff3860`,
  red_dark: `#ff1443`,
  red_light: `#ff5c7c`,
  blue: `#498afb`,
  blue_dark: `#2674fa`,
  blue_light: `#6ca0fc`,
  orange: `#fa8142`,
  orange_dark: `#f96a1f`,
  orange_light: `#fb9865`,
  green: `#09c372`,
  green_dark: `#07a15e`,
  green_light: `#0be586`,
  purple: `#9166cc`,
  purple_dark: `#7d4bc3`,
  purple_light: `#a481d5`,
  yellow: `#ffdd57`,
  yellow_dark: `#ffd633`,
  yellow_light: `#ffe47a`,
  pink: `#ff4088`,
  pink_dark: `#ff1c72`,
  pink_light: `#ff649e`,
  gray0: `#f8f8f8`,
  gray1: `#dbe1e8`,
  gray2: `#b2becd`,
  gray3: `#6c7983`,
  gray4: `#454e56`,
  gray5: `#2a2e35`,
  gray6: `#12181b`,
  // ========================= New colors =========================
  primary_0: `#303030`,
  primary_m1: `#5E5E5E`,
  primary_old: `#F8F8F8`,
  blue_m1: `#6CA0FC`,
  blue_m2: `#0059A6`,
  blue_p2: `#849DC5`,
  blue_p1: `#5678af`,
  blue_facebook: `#35569A`,

  green_0: `#49C246`,
  red_0: `#EB7474`,

  gray_m2: `#848484`,
  gray_m1: `#B3B3B3`,
  gray_0: `#CECECE`,
  gray_p1: `#E5E5E5`,

  header_clr: `#6ca0fc`,
};

export const lightTheme = {
  body: rootStyles.primary_0,
  // header: rootStyles.primary_0,
  header: `rgba(0, 0, 0, 0)`,
  header_text_current: rootStyles.primary_old,
  headerToolTip: rootStyles.gray2,
  text: rootStyles.gray4,
  button: rootStyles.blue_light,
  buttonText: rootStyles.primary_old,
  shopNavText_Hover: rootStyles.gray2,
  cartIcon: rootStyles.primary_old,
  mainPage: {
    app_Hover: `rgba(222, 222, 223, 0.3)`,
    appAccessBtnText: rootStyles.primary_old,
    spinner_mainPageAccessAppWrapper: rootStyles.blue_light,
    username: rootStyles.primary_old,
    editProfileText: rootStyles.primary_old,
  },
  shopNav: {
    toggler_bg: rootStyles.blue_p2,
    toggler_bg_hover: rootStyles.blue_p1,
    shopNavText_Hover: rootStyles.gray2,
    menuWrapper_bg: rootStyles.blue_p2,
  },
  appStoreCard: {
    cardBg: rootStyles.primary_m1,
    cardText: rootStyles.primary_old,
    cardStartBtn_bg: rootStyles.blue_m2,
    // cardLoadingContent_primary: rootStyles.gray1,
    cardLoadingContent_primary: rootStyles.gray_m2,
    // cardLoadingContent_secondary: `#d1d8e1`,
    cardLoadingContent_secondary: rootStyles.primary_m1,
    // cardLoadingContent_secondary: rootStyles.primary_m1,
  },
  wishListCard: {
    cardBg: rootStyles.primary_m1,
    cardText: rootStyles.primary_old,
    cardBtn_bg: rootStyles.blue_p2,
  },
  cartPage: {
    cartItemTitleCreatorText: rootStyles.primary_old,
    cartItemPriceText: rootStyles.red_dark,
    cartItemBtns: rootStyles.blue_dark,
    cartItemBtns_Hover: rootStyles.blue_light,
    cartWishlistBorder: `1px solid rgba(128, 128, 128, 0.13)`,
    text: rootStyles.primary_old,
  },
  wishListPage: {
    emptyWishList_text: rootStyles.primary_old,
  },
  NavigationMenu: {
    NavigationMenuBg: `rgba(0, 0, 0, 0.8)`,
    NavigationMenuText: rootStyles.primary_old,
    NavigationMenuText_Hover: rootStyles.gray_m2,
  },
  RouteBlock: {
    currentRouteText: rootStyles.gray_0,
    prevRouteText: rootStyles.gray_m2,
  },
  appDetailPage: {
    featureList: rootStyles.primary_old,
    preloader_primary: rootStyles.gray_m2,
    preloader_secondary: rootStyles.gray6,
    btn_font_clr: "white",
    heartIcon: "white",
    heartIcon_active: "red",
    text: rootStyles.primary_old,
    addToCartBtn_bg: rootStyles.blue_m2,
    addToWishListBtn_bg: rootStyles.pink_light,
  },
  commentsConverterPage: {
    title: rootStyles.blue,
    btnExample: rootStyles.blue,
  },
  pigGamePage: {
    panel_bg: "white",
    targetInput_border: rootStyles.header_clr,
    activePanel_bg: rootStyles.gray0,
    dot_color: `#eb4d4d`,
    current_container: `#eb4d4d`,
    totalScore: `#eb4d4d`,
    preloader_bg: rootStyles.header_clr,
    playerLogInBtn_primary: `#eb4d4d`,
    PlayerLogInBtn_secondary: "white",
  },
  SignUpPage: {
    SignUpTitle: rootStyles.primary_old,
    OrSepereateLine: rootStyles.primary_old,
  },
  AuthPage: {
    ToSignUpPageBtn: rootStyles.primary_old,
    ToLogInPageBtn: rootStyles.primary_old,
  },
  LogInForm: {
    logInBtn_bg: rootStyles.blue_m2,
    logInBtn_text: rootStyles.primary_old,
    toCreateAccountLink: rootStyles.primary_old,
  },
  SignUpForm: {
    SignUpButton_bg: `rgba(0, 0, 0, 0)`,
    SignUpButton_border: rootStyles.primary_old,
    SignUpButton_text: rootStyles.primary_old,
  },
  FormInput: {
    text: rootStyles.primary_old,
    placeHolder: rootStyles.primary_old,
    svg: rootStyles.primary_old,
    forgotPassBtn_text: rootStyles.primary_old,
  },
  OauthBtns: {
    googleBtn_bg: "white",
    facebookBtn_bg: rootStyles.blue_facebook,
    appleBtn_bg: "black",
    googleBtn_text: "black",
    facebookBtn_text: "white",
    appleBtn_text: "white",
  },
  SocialContactPair: {
    svg: rootStyles.primary_old,
    text: rootStyles.primary_old,
  },
};

export const darkTheme = {};