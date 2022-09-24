import { Avatar, Button, Card, Col, Container, Grid, Row, Spacer, Text, User } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import Link from "../components/link"

export default function Dashboard() {
  const { data } = useSession()
  return (
    <Container xs css={{ my: "$14", pl: "$16" }}>
      <Col css={{ borderLeft: "2px solid", mb: "$20", borderLeftColor: "$accents4" }}>
        <Row align="start" css={{ ml: -30 }}>
          <Avatar
            src="https://editorial01.shutterstock.com/wm-preview-1500/9469410j/fa8e0c72/Shutterstock_9469410j.jpg"
            text={data?.user?.name}
            color="white"
            bordered
            referrerPolicy="no-referrer"
            size="xl"
            css={{ borderWidth: "30px" }}
          />
          <Col css={{ pl: 14 }}>
            <Text h1 children="Rafael Delalande" css={{ fontSize: "$4xl", fontStyle: "italic" }} />
            <Row justify="space-between" css={{ gap: "$4", mb: "$6", flexDirection: "column", "@xs": { flexDirection: "row", gap: "$18" } }}>
              <Text size="$sm" weight="semibold" css={{ mt: -8 }}>
                Tattoo Artist
              </Text>
              <Text size="$sm" weight="semibold" css={{ mt: -8, fontStyle: "italic" }}>
                🇨🇦 Toronto, Canada
              </Text>
            </Row>
            <Text size="$sm" color="$accents8" css={{ mt: -10 }}>
              hi, how&apos;s it going? this is the place where you can create, update & delete your public profiles for your artist persona & tattoo shops, as well as manage your guest spots. hi,
              how&apos;s it going? this is the place where you can create, update & delete your public profiles for your artist persona.
            </Text>
          </Col>
        </Row>
        <Spacer y={4} />
        {[1, 2, 3, 4].map((v) => (
          <Row key={v} align="start" justify="center" css={{ ml: -20, mt: "$10" }}>
            <Avatar src="https://api.tattooswizard.com/images/CB_G-QGja4K" text={data?.user?.name} color="white" bordered referrerPolicy="no-referrer" />
            <Col css={{ pl: 24, mt: 6, gap: "$14" }}>
              <Link href="/">
                <Text h3 children="@blackwork.studio" color="primary" css={{ fontSize: "$md", fontStyle: "italic" }} />
              </Link>
              <Row justify="space-between" css={{ gap: "$4", flexDirection: "column", "@xs": { flexDirection: "row", gap: "$18" } }}>
                <Text size="$sm" weight="semibold" css={{ mt: -8 }}>
                  Owner
                </Text>
                <Text size="$sm" weight="semibold" css={{ mt: -8, fontStyle: "italic" }}>
                  🇬🇧 London, UK
                </Text>
              </Row>
              <Text size="$sm" color="$accents8" css={{ mt: 4 }}>
                tattoo shop based in london. specialising in blackwork, antistyle & ignorant-trash style tattoos. Hit our artists up to schedule an appointment.
              </Text>
            </Col>
          </Row>
        ))}
        <Spacer y={4} />
        {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
          <Row key={v} align="start" justify="center" css={{ ml: -20, mt: "$10" }}>
            <Avatar
              src="https://www.mytattoo.com/fileadmin/user_upload/MyTattoo.com-Most-Wanted-Tattoo-Studio-Berlin.jpg"
              text={data?.user?.name}
              color="white"
              bordered
              referrerPolicy="no-referrer"
            />
            <Col css={{ pl: 24, mt: 6, gap: "$14" }}>
              <Link href="/">
                <Text h3 children="@hyperhumanttt" color="primary" css={{ fontSize: "$md", fontStyle: "italic" }} />
              </Link>
              <Row justify="space-between" css={{ gap: "$4", flexDirection: "column", "@xs": { flexDirection: "row", gap: "$18" } }}>
                <Text size="$sm" weight="semibold" css={{ mt: -8 }}>
                  June 21 - 29, 2022
                </Text>
                <Text size="$sm" weight="semibold" css={{ mt: -8, fontStyle: "italic" }}>
                  🇺🇦 Kyiev, Ukraine
                </Text>
              </Row>
              <Text size="$sm" color="$accents8" css={{ mt: 4 }}>
                tattoo shop based in vienna. specialising in bla, antistyle & ignorant-trash style tattoos. Hit our artists up to schedule an appointment.
              </Text>
            </Col>
          </Row>
        ))}
      </Col>
    </Container>
  )
}
