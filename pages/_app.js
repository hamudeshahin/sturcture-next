import GlobalStyles from "../styles/global-styles";
import Theme from "../config/theme";
// layout
import MainLayout from "../layouts/main-layout/main-layout";
const layouts = {
  main: MainLayout,
  none: (props) => <>{props.children}</>,
};

function MyApp({ Component, pageProps }) {
  const Layout =
    layouts[Component.layout || "none"] || ((children) => <>{children}</>);
  return (
    <Theme>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp;
