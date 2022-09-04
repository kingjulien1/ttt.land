import "../styles/globals.css"
import type { AppProps } from "next/app"
import Link from "next/link"
import Footer from "@components/footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="p-4 min-h-screen">
        <div className="pt-20">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MyApp
