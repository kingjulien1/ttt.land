import "../styles/globals.css"
import type { AppProps } from "next/app"
import Link from "next/link"
import Footer from "@components/footer"
import NavBar from "@components/navbar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <main className="p-4 min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
