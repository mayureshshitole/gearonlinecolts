import "../styles/globals.css";
import { ToastProvider } from "react-toast-notifications";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={4000}
      placement="top-center"
    >
      <Component {...pageProps} />
    </ToastProvider>
  );
};

export default App;
