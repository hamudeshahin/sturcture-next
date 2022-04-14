const theme_key = process.env.NEXT_PUBLIC_SITE_THEME_KEY;
export function getTheme() {
  return window.localStorage.getItem(theme_key);
}

export function setTheme(theme) {
  window.localStorage.setItem(theme_key, theme);
}
