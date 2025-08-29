import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts/theme-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
