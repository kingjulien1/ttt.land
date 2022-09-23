import { Container, Grid, Text } from "@nextui-org/react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <Container sm css={{ textAlign: "center", p: 0 }}>
      <Grid.Container gap={6} justify="center" css={{ width: "100%", my: 40, mx: 0, px: 4, textAlign: "center" }}>
        <Grid>
          <Text
            h1
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
          >
            Website Terms and Conditions of Use
          </Text>
        </Grid>
        <Grid>
          <Text h2>Terms</Text>
          <Text>
            By accessing this Website, accessible from ttt-land.vercel.app, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the
            agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by
            copyright and trade mark law.
          </Text>
        </Grid>
        <Grid>
          <Text h2>Use License</Text>
          <Text>
            Permission is granted to temporarily download one copy of the materials on Tattoo Land&apos;s Website for personal, non-commercial transitory viewing only. This is the grant of a license,
            not a transfer of title, and under this license you may not:
          </Text>
          <Text>
            modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on Tattoo Land&apos;s Website;
            remove any copyright or other proprietary notations from the materials; or transferring the materials to another person or &quot;mirror&quot; the materials on any other server.
          </Text>
          <Text>
            This will let Tattoo Land to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded
            materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the Terms Of Service Generator.
          </Text>
        </Grid>
        <Grid>
          <Text h2>Disclaimer</Text>
          <Text>
            All the materials on Tattoo Land&apos;s Website are provided &quot;as is&quot;. Tattoo Land makes no warranties, may it be expressed or implied, therefore negates all other warranties.
            Furthermore, Tattoo Land does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any
            sites linked to this Website.
          </Text>
        </Grid>
        <Grid>
          <Text h2>Limitations</Text>
          <Text>
            Tattoo Land or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Tattoo Land&apos;s Website, even if Tattoo Land
            or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties
            or limitations of liability for incidental damages, these limitations may not apply to you.
          </Text>
        </Grid>
        <Grid>
          <Text h2>Revisions and Errata</Text>
          <Text>
            The materials appearing on Tattoo Land&apos;s Website may include technical, typographical, or photographic errors. Tattoo Land will not promise that any of the materials in this Website
            are accurate, complete, or current. Tattoo Land may change the materials contained on its Website at any time without notice. Tattoo Land does not make any commitment to update the
            materials.
          </Text>
        </Grid>
        <Grid>
          <Text h2>Links</Text>
          <Text>
            Tattoo Land has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by
            Tattoo Land of the site. The use of any linked website is at the user&apos;s own risk.
          </Text>
        </Grid>
        <Grid>
          <Text h2>Site Terms of Use Modifications</Text>
          <Text>
            Tattoo Land may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and
            Conditions of Use.
          </Text>
        </Grid>
        <Grid>
          <Text h2>Your Privacy</Text>
          <Text>
            Please read our <Link href="/privacy-policy">Privacy Policy</Link>.
          </Text>
        </Grid>
        <Grid>
          <Text h2>Governing Law</Text>
          <Text>Any claim related to Tattoo Land&apos;s Website shall be governed by the laws of at without regards to its conflict of law provisions.</Text>
        </Grid>
      </Grid.Container>
    </Container>
  )
}
