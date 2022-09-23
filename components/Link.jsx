import { Link as NextUiLink } from "@nextui-org/react"
import NextLink from "next/link"
/**
 * wrapper component to combine {@see NextUiLink} & (per default) {@see NextLink} link components to
 * provide both styling and nextjs features like prefetching, etc.
 *
 * @param {string} href target url
 * @param {import("react").FunctionComponent} Component which link component to wrap the content with
 */
export default function Link({ href = "/", Component = NextUiLink, children, ...props }) {
  return (
    <NextLink href={href}>
      <Component {...props}>{children}</Component>
    </NextLink>
  )
}
