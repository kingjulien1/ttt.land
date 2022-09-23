import { Button, Card, Col, Container, Grid, Text, User } from "@nextui-org/react"
import { useSession } from "next-auth/react"

export default function Dashboard() {
  const { data } = useSession()
  return (
    <>
      <Button
        size="xl"
        auto
        css={{ position: "fixed", bottom: 50, right: 50, width: "unset", zIndex: "$10" }}
        shadow
        icon={
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: 30, height: 30 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      ></Button>
      <Container md css={{ mt: 30, textAlign: "center" }}>
        <Text h1>Public Pages</Text>
        <Text size="$sm">Hi {data?.user.name}, glad you&apos;re back. This is the place where you can manage public pages for your profile & shops.</Text>
        <Grid.Container gap={3} css={{ width: "100%", my: 50, mx: 0, px: 4 }}>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Page key={i} />
          ))}
        </Grid.Container>
      </Container>
    </>
  )
}

function Page() {
  return (
    <Grid sm={4} xs={12}>
      <Card isHoverable isPressable variant="bordered">
        <Card.Header css={{ textAlign: "start" }}>
          <Col css={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADQHjtFi-u-Qil-I5bkO1Su_PODg9GNrf1w&usqp=CAU" name="handpokeprincess" description="Tattoo Artist" />
            <Button
              auto
              flat
              icon={
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: 30, height: 30 }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              }
            />
          </Col>
        </Card.Header>
        <Card.Image src="https://i.pinimg.com/originals/a3/61/b0/a361b0fca67cc73e314866d0bc78ec57.jpg" objectFit="cover" width="100%" height={250} alt="latest instagram post" />
      </Card>
    </Grid>
  )
}
