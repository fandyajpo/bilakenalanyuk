import { GeistProvider, CssBaseline } from "@geist-ui/core";
import "@/styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </GeistProvider>
  );
}
