import { createTheme, NextUIProvider, useTheme } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"

const lightTheme = createTheme({ type: "light" })

const darkTheme = createTheme({ type: "dark" })

function TattooLand({ Component, pageProps }: AppProps) {
  const { isDark } = useTheme()

  return (
    <ThemeProvider defaultTheme="system" attribute="class" value={{ light: lightTheme.className, dark: darkTheme.className }}>
      <NextUIProvider>
        <main className="p-4 min-h-screen">
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </ThemeProvider>
  )
}

export default TattooLand
