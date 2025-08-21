import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/theme-context";
const roboto = Roboto({ 
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={`${roboto.variable} ${robotoMono.variable}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
