import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { CssBaseline } from "@nextui-org/react"

type NextUIThemeContext = {
  type: ThemeType | string
  theme?: NextUITheme
  isDark?: boolean
}

class MyDocument extends Document {
  static async getInitialProps(ctx: NextUIThemeContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
