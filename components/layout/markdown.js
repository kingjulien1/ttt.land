import { Container } from "@nextui-org/react"
import Head from "next/head"

/**
 * layout wrapper for markdown pages, apply styling & set meta data
 *
 * @param {object} meta options for html doc
 * @returns {Container}
 */
export default function Markdown({ meta, children }) {
  return (
    <>
      <Head children={<title children={meta.title} />} />
      <Container xs css={{ my: "$14", display: "grid", gap: "$10" }} children={children} />
    </>
  )
}
