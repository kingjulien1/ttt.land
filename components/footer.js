import { Card, Link as NextUiLink, Row, Text } from "@nextui-org/react"
import Link from "./link"

/**
 * section at the bottom end of the base layout with important links
 *
 * @returns {Card} footer component
 */
export default function Footer() {
  return (
    <Card as="footer" css={{ background: "$blue300", width: "100%", p: 20, mt: 10, borderRadius: 0 }}>
      <Row css={{ my: 8, display: "flex", flexDirection: "column-reverse", alignItems: "center", rowGap: 10, "@xs": { flexDirection: "row", justifyContent: "space-around", rowGap: 0 } }}>
        <Creator />
        <FooterLink href="/legal/privacy-policy" title="Privacy Policy" />
        <FooterLink href="/legal/terms-of-service" title="Terms of Service" />
        <FooterLink href="/legal/cookie-policy" title="Cookie Policy" />
        <FooterLink href="https://github.com/kingjulien1/trampstamp.network" title="Repository" isExternal />
        <FooterLink href="https://github.com/kingjulien1/trampstamp.network/discussions/new?category=feedback" title="Feedback" isExternal />
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
  return <Component color="text" css={{ fontSize: "$sm" }} href={href} children={title} />
}

/**
 * message by the author
 *
 * @returns {Text}
 */
function Creator() {
  return (
    <Text size="$xs" css={{ mt: 30, "@xs": { mt: 0 }, justifySelf: "start", textAlign: "start" }}>
      made with ❤️ by <NextUiLink color="default" href="https://github.com/kingjulien1" css={{ display: "inline", fontStyle: "italic" }} children="kingjulien1" />
    </Text>
  )
}
