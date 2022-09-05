import Footer from "@/components/footer"
import Nav from "@/components/navbar"
import { createTheme, Image, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"

const lightTheme = createTheme({ type: "light" })

const darkTheme = createTheme({ type: "dark" })

function TattooLand({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" value={{ light: lightTheme.className, dark: darkTheme.className }}>
      <NextUIProvider>
        <main style={{ minHeight: "100vh" }}>
          <Image src="/gradient-left-dark.svg" alt="gradient" css={{ position: "fixed", left: -200, bottom: -200 }} />
          <Image src="/gradient-right-dark.svg" alt="gradient" css={{ position: "fixed", right: -200, top: -200, rotate: "180deg" }} />
          <Nav />
          <Component {...pageProps} />
        </main>
        <Footer />
      </NextUIProvider>
    </ThemeProvider>
  )
}

export default TattooLand
