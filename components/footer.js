import { Card, Link as NextUiLink, Row, Text } from "@nextui-org/react"
import Link from "./link"

/**
 * section at the bottom end of the base layout with important links
 *
 * @returns {Card} footer component
 */
export default function Footer() {
  return (
    <Card as="footer" css={{ background: "transparent", width: "100%", mx: 0, px: 20, py: 20, my: 10 }}>
      <Row css={{ my: 8, display: "flex", flexDirection: "column-reverse", alignItems: "center", rowGap: 10, "@xs": { flexDirection: "row", justifyContent: "space-around", rowGap: 0 } }}>
        <Creator />
        <FooterLink href="/privacy-policy" title="Privacy Policy" />
        <FooterLink href="/terms-of-service" title="Terms of Service" />
        <FooterLink href="/cookie-policy" title="Cookie Policy" />
        <FooterLink href="https://github.com/kingjulien1/ttt.land" title="Repository" isExternal />
        <FooterLink href="https://github.com/kingjulien1/ttt.land/discussions/new?category=feedback" title="Feedback" isExternal />
      </Row>
    </Card>
  )
}

/**
 * wrapper component for the {@see Link} to apply styling
 *
 * @param {string} href target url
 * @param {string} title view name
 * @param {boolean} isExternal wether target url is of different origin
 * @returns
 */
function FooterLink({ href, title, isExternal = false }) {
  const Component = isExternal ? NextUiLink : Link
  return <Component color="text" css={{ fontSize: "$sm", color: "$gray800" }} href={href} children={title} />
}

/**
 * message by the author
 *
 * @returns {Text}
 */
function Creator() {
  return (
    <Text size="$xs" css={{ mt: 30, "@xs": { mt: 0 }, justifySelf: "start", textAlign: "start" }}>
      Created with ❤️ by <NextUiLink color="default" href="https://github.com/kingjulien1" css={{ display: "inline" }} children="kingjulien1" />
    </Text>
  )
}
