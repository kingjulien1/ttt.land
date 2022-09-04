# ttt.land

network for tatoo artists to announce travel dates & residencies.

## concept 🌟

once registered, users can create public profile pages for their artist-personas & shops by connecting their instagram. All relevant instagram-data like name, profile picture & media, as well as connected shops/artists & travel dates, aka guest spots, will make up profiles.

## tech stack 🧱

- web framework [nextjs](https://nextjs.org) using typescript & incremental static site generation to preserve database reads
- [tailwindcss](https://tailwindcss.com) for styling
- persisting & securing data with [dgrpah](https://dgraph.io)
- user authentication with [next-auth](https://next-auth.js.org)
- testing with [jest](https://jestjs.io) and [cypress](https://www.cypress.io)
- deploy to the edge with [vercel](https://vercel.com)

## routes 📚

specification of functionality and contents provided by individual routes.

### landing `/`

few sections to promote & introduce the service + call to action link to sign up.

### dashboard `/dash`

where users manage public pages (representing either artist or shop) by authenticating & connecting their instagram profiles to access data like name, profile picture & media.

### profiles `/${name}`

public pages representing either a shop or an artist profile. lists all linked shops/artists, travel dates & instagram media.
