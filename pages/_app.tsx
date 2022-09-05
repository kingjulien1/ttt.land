import "../styles/globals.css"
import type { AppProps } from "next/app"
import Link from "next/link"
import Footer from "@components/footer"
import NavBar from "@components/navbar"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} defaultTheme="system" attribute="class">
      <NavBar />
      <main className="p-4 min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
