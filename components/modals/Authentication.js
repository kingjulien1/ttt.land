import { Button, Modal, Text } from "@nextui-org/react"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { FaDiscord, FaGoogle, FaTwitter } from "react-icons/fa"

/**
 * modal to sign in/ sign up users into the application via thrid party options.
 *
 * @returns react fragemnt with both the {@see Modal} component and corresponding {@see Button} trigger compoent
 */
export default function Authentication() {
  const [isVisible, setVisible] = useState(false)
  const open = () => setVisible(true)
  const close = () => setVisible(false)

  return (
    <>
      <Button auto size="sm" onClick={open} children="Join" />
      <Modal closeButton blur aria-labelledby="sign in" open={isVisible} onClose={close}>
        <Header />
        <Body />
      </Modal>
    </>
  )
}

/**
 * title of the authentication modal
 *
 * @returns {Modal.Header} title
 */
function Header() {
  return (
    <Modal.Header>
      <Text id="modal-title" size={18} children="Join us!" />
    </Modal.Header>
  )
}

/**
 * list of vertical stacked buttons to start authentication via thrid party providers
 *
 * @returns {Modal.Body} authentication buttons
 */
function Body() {
  return (
    <Modal.Body css={{ pb: 50, gap: 4 }}>
      <AuthenticationButton provider="Google" icon={<FaGoogle />} />
      <AuthenticationButton provider="twitter" icon={<FaTwitter />} />
      <AuthenticationButton provider="discord" icon={<FaDiscord />} />
    </Modal.Body>
  )
}

/**
 * button to authenticate a user with a third party provider using next-auth api
 *
 * @param {string} provider capitalized name of the selected provider
 * @param icon icon of the selected provider
 * @returns {Button} trigger to start authentication
 */
function AuthenticationButton({ provider, icon }) {
  const onPress = () => signIn(provider.toLowerCase())
  return <Button onPress={onPress} icon={icon} children={provider} />
}
