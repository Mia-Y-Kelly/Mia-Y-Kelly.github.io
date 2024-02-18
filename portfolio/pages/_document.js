import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "./components/navbar";
// import toggle from '@/pages/toggle'

export default function Document() {
  return (
    <Html lang="en" className="light-mode" id="root">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
