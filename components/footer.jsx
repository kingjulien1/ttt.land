import { Card, Container, Grid, Link, Text } from "@nextui-org/react"

export default function Footer() {
  return (
    <Card variant="bordered" css={{ background: "transparent", padding: 20, borderBottom: "none" }}>
      <Container fluid display="flex" justify="center">
        <Text size="$sm">
          Created with ❤️ by{" "}
          <Link color="default" href="https://github.com/kingjulien1" style={{ display: "inline" }}>
            kingjulien1
          </Link>
        </Text>
      </Container>
    </Card>
  )
}
