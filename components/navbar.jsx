import { Button, Link, Navbar, Switch, Text, useTheme } from "@nextui-org/react"
import { useTheme as useNextTheme } from "next-themes"
import NextLink from "next/link"

const collapseItems = ["Home", "Discover", "About"]

export default function Nav() {
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <NextLink href="/">
          <Link hideIn="xs" color="text" css={{ fontWeight: "$bold", fontSize: "large", paddingLeft: "$10" }}>
            ttt.land
          </Link>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs">
        <NextLink href="/">
          <Navbar.Link>Home</Navbar.Link>
        </NextLink>
        <NextLink href="/discover">
          <Navbar.Link>Discover</Navbar.Link>
        </NextLink>
        <NextLink href="/about">
          <Navbar.Link>About</Navbar.Link>
        </NextLink>
      </Navbar.Content>
      <Navbar.Content>
        <ColorModeToggle />
        <Button auto shadow size="sm">
          Join
        </Button>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item} activeColor="secondary">
            <NextLink href={item === "Home" ? "/" : item.toLowerCase()}>
              <Link color="inherit">{item}</Link>
            </NextLink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

function ColorModeToggle() {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  return (
    <Switch
      shadow
      checked={isDark}
      size="lg"
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      iconOn={
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19H12.998V22H10.998zM10.998 2H12.998V5H10.998zM1.998 11H4.998V13H1.998zM18.998 11H21.998V13H18.998z"
          ></path>
          <path fill="currentColor" transform="rotate(-45.017 5.986 18.01)" d="M4.487 17.01H7.487V19.01H4.487z"></path>
          <path fill="currentColor" transform="rotate(-45.001 18.008 5.99)" d="M16.508 4.99H19.509V6.99H16.508z"></path>
          <path fill="currentColor" transform="rotate(-134.983 5.988 5.99)" d="M4.487 4.99H7.487V6.99H4.487z"></path>
          <path fill="currentColor" transform="rotate(134.999 18.008 18.01)" d="M17.008 16.51H19.008V19.511000000000003H17.008z"></path>
        </svg>
      }
      iconOff={
        <svg width={24} height={24} viewBox="0 0 24 24">
          <path
            d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
            fill="currentColor"
          />
        </svg>
      }
    />
  )
}
