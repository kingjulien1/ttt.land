import { Avatar, Button, Dropdown, Link, Loading, Modal, Navbar, Spacer, Switch, Text, useTheme } from "@nextui-org/react"
import { signIn, signOut, useSession } from "next-auth/react"
import { useTheme as useNextTheme } from "next-themes"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const collapseItems = ["Home", "Discover", "About"]

export default function Nav() {
  const { status } = useSession()

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <NextLink href="/">
          <Link hidein="xs" color="text" css={{ fontWeight: "$bold", fontSize: "large", paddingLeft: "$10" }}>
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
        {{ loading: <Loading />, unauthenticated: <AuthModal />, authenticated: <UserModal /> }[status]}
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
  const { isDark } = useTheme()

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

function AuthModal() {
  const [isVisible, setVisible] = useState(false)
  const open = () => setVisible(true)
  const close = () => setVisible(false)

  return (
    <>
      <Button auto shadow size="sm" onClick={open}>
        Join
      </Button>
      <Modal closeButton blur aria-labelledby="sign in" open={isVisible} onClose={close}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Join us!
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Button
            color="secondary"
            onPress={() => signIn("google")}
            icon={
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 11h8.533c.044.385.067.78.067 1.184 0 2.734-.98 5.036-2.678 6.6-1.485 1.371-3.518 2.175-5.942 2.175A8.976 8.976 0 0 1 3 11.98 8.976 8.976 0 0 1 11.98 3c2.42 0 4.453.89 6.008 2.339L16.526 6.8C15.368 5.681 13.803 5 12 5a7 7 0 1 0 0 14c3.526 0 6.144-2.608 6.577-6H12v-2z" />
              </svg>
            }
          >
            Sign in with Google
          </Button>
          <Spacer />
        </Modal.Body>
      </Modal>
    </>
  )
}

function UserModal() {
  const { data: session } = useSession()
  const { push } = useRouter()

  return (
    <Dropdown placement="bottom-right">
      <Dropdown.Trigger>
        <Avatar text={session.user.name} color="primary" bordered as="button" src={session?.user?.image} referrerPolicy="no-referrer" />
      </Dropdown.Trigger>
      <Dropdown.Menu aria-label="Avatar Actions" onAction={(key) => (key !== "logout" ? push(key) : signOut())}>
        <Dropdown.Item key="profile" css={{ height: "$18" }}>
          <Text b color="inherit" css={{ d: "flex" }}>
            Signed in as
          </Text>
          <Text b size="$xs" color="inherit" css={{ d: "flex" }}>
            {session.user.email || session.user.name}
          </Text>
        </Dropdown.Item>
        <Dropdown.Item key="/settings" withDivider>
          Settings
        </Dropdown.Item>
        <Dropdown.Item key="/dash" withDivider>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item key="logout" color="error" withDivider>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
