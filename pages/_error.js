import { Container, Link, Text } from "@nextui-org/react"
import NextLink from "next/link"

function Error({ statusCode }) {
  return (
    <Container css={{ height: "80vh", flexDirection: "column" }} display="flex" justify="center" alignContent="center">
      <Text size="$8xl" b>
        {statusCode}
      </Text>
      <Text>{statusCode === 404 ? "Seems like you ran out of ink" : "Sorry, something went wrong there"} 😔</Text>
      <NextLink href="/">
        <Link>go back home</Link>
      </NextLink>
    </Container>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
