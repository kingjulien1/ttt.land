import { Button, Container, Grid, Row, Text } from "@nextui-org/react"
import Link from "next/link"

export default function CookiePolicy() {
  return (
    <Container sm css={{ textAlign: "center", p: 0 }}>
      <Grid.Container gap={6} justify="center" css={{ marginTop: 30, marginBottom: 100 }}>
        <Grid>
          <Text
            h1
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
          >
            Cookie Policy
          </Text>
        </Grid>
        <Grid>
          <Text h2>What are cookies?</Text>
          <Text>
            This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to
            manage the cookie settings.
          </Text>
          <Text>
            Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the
            website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
          </Text>
        </Grid>
        <Grid>
          <Text h2>How do we use cookies?</Text>
          <Text>
            As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right
            way, and they do not collect any of your personally identifiable data.
          </Text>
          <Text>
            The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements
            that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
          </Text>
        </Grid>
        <Grid>
          <Text h2>Manage cookie preferences</Text>
          <Row justify="center" css={{ marginTop: 30, marginBottom: 30 }}>
            <Button auto shadow ghost color="gradient">
              Cookie Settings
            </Button>
          </Row>
          <Text>
            You can change your cookie preferences any time by clicking the above button. This will let you revisit the cookie consent banner and change your preferences or withdraw your consent right
            away.
          </Text>
          <Text>
            In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies.
            Listed below are the links to the support documents on how to manage and delete cookies from the major web browsers.
          </Text>
          <ul style={{ listStyleType: "inherit", display: "table", margin: "0 auto", marginTop: 20, textAlign: "start" }}>
            <li>
              <Link href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">Safari</Link>
            </li>
            <li>
              <Link href="https://support.google.com/accounts/answer/32050">Chrome</Link>
            </li>
            <li>
              <Link href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US">Firefox</Link>
            </li>
            <li>
              <Link href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc">Internet Explorer</Link>
            </li>
          </ul>
          <Text>If you are using any other web browser, please visit your browser&apos;s official support documents.</Text>
        </Grid>
      </Grid.Container>
    </Container>
  )
}
