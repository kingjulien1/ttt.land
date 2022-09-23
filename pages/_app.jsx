import Footer from "@/components/footer"
import Nav from "@/components/navbar"
import { createTheme, Image, NextUIProvider } from "@nextui-org/react"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"

const colors = { primary: "#17B890" }

const lightTheme = createTheme({ type: "light", theme: { colors } })

const darkTheme = createTheme({ type: "dark", theme: { colors } })

function TrampStampNetwork({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" value={{ light: lightTheme.className, dark: darkTheme.className }}>
      <NextUIProvider>
        <SessionProvider>
          <main style={{ minHeight: "100vh" }}>
            <Nav />
            <Component {...pageProps} />
          </main>
          <Footer />
        </SessionProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}

export default TrampStampNetwork
