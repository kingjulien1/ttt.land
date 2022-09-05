import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-purple-200 dark:border-purple-600 dark:border-opacity-25">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">ttt.land</span>
          </a>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Join
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
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
