import Footer from "../components/Footer/";
import Header from "../components/Header/";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
