import "../styles/globals.css"
import type { AppProps } from "next/app"
import Link from "next/link"
import Footer from "@components/footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="p-4 min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
