import { Button } from "@nextui-org/react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="bg-white px-4 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-purple-200 dark:border-purple-600 dark:border-opacity-25">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">ttt.land</span>
          </a>
        </Link>
        <div className="flex md:order-2 space-x-2 md:space-x-4">
          <ColorModeMenu />
          <Button auto shadow color="secondary" className="bg-purple-500">
            Join
          </Button>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link href="/">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded md:p-0 dark:text-gray-400">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/discover">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded md:p-0 dark:text-gray-400">Discover</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded md:p-0 dark:text-gray-400">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function ColorModeMenu() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      auto
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-fuchsia-200 dark:focus:ring-fuchsia-700 rounded-lg text-sm p-2.5"
    >
      {theme === "light" ? (
        <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      ) : (
        <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </Button>
  )
}
