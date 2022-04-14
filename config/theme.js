// import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// import { getTheme } from "../helpers/theme";

const lightTheme = {
  colors: {
    primary: "#085e5f",
    secondary: "#6e6964",
  },
};

const Theme = ({ children }) => {
  //   const [theme, setTheme] = useState();
  //   useEffect(() => {
  //     const __theme = getTheme();
  //     if (__theme) setTheme(__theme);
  //     else setTheme(process.env.NEXT_PUBLIC_SITE_THEME_DEFAULT); //default theme
  //   }, []);

  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default Theme;
