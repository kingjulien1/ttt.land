import { Card, Link as NextUiLink, Row, Text } from "@nextui-org/react"
import NextLink from "next/link"

export default function Footer() {
  return (
    <Card variant="bordered" css={{ background: "transparent", width: "100%", mx: 0, px: 20, py: 20, my: 10, borderBottom: "none", borderRight: "none", borderLeft: "none", borderRadius: "unset" }}>
      <Row
        css={{
          mt: 20,
          display: "flex",
          textAlign: "-webkit-center",
          flexDirection: "column-reverse",
          alignItems: "center",
          rowGap: 10,
          "@xs": { flexDirection: "row", justifyContent: "space-around", rowGap: 0 },
        }}
      >
        <Text size="$sm" css={{ mt: 30, "@xs": { mt: 0 }, justifySelf: "start", textAlign: "start" }}>
          Created with ❤️ by{" "}
          <NextUiLink color="default" href="https://github.com/kingjulien1" css={{ display: "inline" }}>
            kingjulien1
          </NextUiLink>
        </Text>
        <Link href="privacy-policy">Privacy Policy</Link>
        <Link href="terms-of-service">Terms of Service</Link>
        <Link href="cookie-policy">Cookie Policy</Link>
        <NextUiLink color="text" css={{ fontSize: "$sm", color: "$gray800" }} href="https://github.com/kingjulien1/ttt.land">
          Repository
        </NextUiLink>
        <NextUiLink color="text" css={{ fontSize: "$sm", color: "$gray800" }} href="https://github.com/kingjulien1/ttt.land/discussions/new?category=feedback">
          Feedback
        </NextUiLink>
      </Row>
    </Card>
  )
}

function Link({ href, children }) {
  return (
    <NextLink href={href}>
      <NextUiLink color="text" css={{ fontSize: "$sm", color: "$gray800" }}>
        {children}
      </NextUiLink>
    </NextLink>
  )
}
