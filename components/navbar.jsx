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
            flat
            color="success"
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
          <Button
            flat
            onPress={() => signIn("twitter")}
            icon={
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" />
              </svg>
            }
          >
            Sign in with Twitter
          </Button>
          <Button
            flat
            color="secondary"
            onPress={() => signIn("discord")}
            icon={
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M13.914 14.58a8.998 8.998 0 0 1-.484.104 7.06 7.06 0 0 1-2.664-.01c-.154-.03-.372-.083-.653-.158l-.921 1.197c-2.273-.073-3.137-1.596-3.137-1.596 0-3.381 1.481-6.122 1.481-6.122 1.481-1.133 2.89-1.102 2.89-1.102l.403.525a1.12 1.12 0 0 1 .112-.01 8.527 8.527 0 0 1 2.314.01l.442-.525s1.41-.031 2.89 1.103c0 0 1.482 2.74 1.482 6.121 0 0-.875 1.522-3.148 1.596l-1.007-1.134zM10.076 11C9.475 11 9 11.45 9 12s.485 1 1.076 1c.6 0 1.075-.45 1.075-1 .01-.55-.474-1-1.075-1zm3.848 0c-.6 0-1.075.45-1.075 1s.485 1 1.075 1c.601 0 1.076-.45 1.076-1s-.475-1-1.076-1zM21 23l-4.99-5H19V4H5v14h11.003l.57 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v19z" />
              </svg>
            }
          >
            Sign in with Discord
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
