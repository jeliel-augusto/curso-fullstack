import { Html, Head, Main, NextScript } from "next/document";
import { HeaderContext } from "../context/HeaderContext";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <HeaderContext.Provider value={{ expanded: false }}>
          <Main />
          <NextScript />
        </HeaderContext.Provider>
      </body>
    </Html>
  );
}
