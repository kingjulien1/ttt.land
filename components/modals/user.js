import { Avatar, Dropdown, Text } from "@nextui-org/react"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"

const links = ["settings", "pages", "logout"]

/**
 * a dropdown menu with a list of useful links & actions for **authenticated** users.
 *
 * @returns {Dropdown} menu of links & actions
 */
export default function User() {
  const { push } = useRouter()

  return (
    <Dropdown placement="bottom-right">
      <Trigger />
      <Dropdown.Menu aria-label="User Links and Actions" onAction={(key) => (key !== "logout" ? push(key) : signOut())}>
        <Dropdown.Item css={{ height: "$18" }} children={<Header />} />
        {links.map((link, index) => (
          <Dropdown.Item key={link} withDivider={index % 2 === 0} children={link} color={link !== "logout" ? "default" : "error"} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

/**
 * circular avatar with a user's img acts as a trigger button to open/close the menu
 * @todo set default image
 *
 * @returns {Dropdown.Trigger} trigger to toggle menu
 */
function Trigger({ name, src = "" }) {
  const { data } = useSession()

  return (
    <Dropdown.Trigger>
      <Avatar text={data.user.name} color="primary" bordered as="button" src={data.user.image} referrerPolicy="no-referrer" />
    </Dropdown.Trigger>
  )
}

/**
 * gives some information on the currently signed in user on the top of the menu
 *
 * @returns react fragment with label and name of use
 */
function Header() {
  const { data } = useSession()

  return (
    <>
      <Text b color="inherit" css={{ d: "flex" }} children="Signed in as" />
      <Text b size="$xs" color="inherit" css={{ d: "flex" }} children={data.user.email || data.user.name} />
    </>
  )
}
