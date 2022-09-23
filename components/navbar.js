import { Loading, Navbar, Switch, useTheme } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import { useTheme as useNextTheme } from "next-themes"
import { FaMoon, FaSun } from "react-icons/fa"
import Link from "./Link"
import Authentication from "./modals/Authentication"
import User from "./modals/User"

const links = { Home: "/", Discover: "/discover", About: "/about" }

/**
 * top navigation bar for important links & authentication. core part of the base layout.
 *
 * @returns {Navbar} navigation bar
 */
export default function Nav() {
  return (
    <Navbar isBordered variant="sticky" isCompact>
      <NavBarBrand />
      <NavBarContent />
      <NavBarResponsiveContent />
    </Navbar>
  )
}

// navbar parts

/**
 * Left section of navigation bar, with icon & brand name
 * @todo add company logo here
 *
 * @returns {NavBar.Brand} company branding
 */
function NavBarBrand() {
  return (
    <Navbar.Brand>
      <Link href="/" color="text" css={{ paddingLeft: "$10" }}>
        trampstamp.network
      </Link>
    </Navbar.Brand>
  )
}

/**
 * main content of the navigation bar, with links {@see links} in the center
 * and theme-toggle & authentication handler to the right.
 *
 * @returns navigation bar main content as a react fragment with two {@see Navbar.Content} children
 */
function NavBarContent() {
  const { status } = useSession()

  return (
    <>
      <Navbar.Content enableCursorHighlight hideIn="xs">
        {Object.keys(links).map((title) => (
          <Link Component={Navbar.Link} key={title} href={links[title]} children={title} />
        ))}
      </Navbar.Content>
      <Navbar.Content>
        <ThemeToggle />
        {{ loading: <Loading />, unauthenticated: <Authentication />, authenticated: <User /> }[status]}
      </Navbar.Content>
    </>
  )
}

/**
 * on smaller screens the main content {@see NavBarContent} will be hidden and this responsible
 * navigation menu with the same links {@see links} shown instead.
 *
 * @returns {Navbar.Collapse} navigation menu
 */
function NavBarResponsiveContent() {
  return (
    <Navbar.Collapse>
      {Object.keys(links).map((title) => (
        <Navbar.CollapseItem key={title} activeColor="secondary">
          <Link href={links[title]} color="inherit" children={title} />
        </Navbar.CollapseItem>
      ))}
    </Navbar.Collapse>
  )
}

/**
 * a swtich to toggle between dark- & light mode theme, updating the current color scheme.
 *
 * @returns {Switch}
 */
function ThemeToggle() {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()
  const onChange = (e) => setTheme(e.target.checked ? "dark" : "light")

  return <Switch shadow checked={isDark} onChange={onChange} iconOn={<FaSun />} iconOff={<FaMoon />} />
}
