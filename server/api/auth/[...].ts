import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import BungieProvider from "next-auth/providers/bungie"
import LineProvider from 'next-auth/providers/line'
export default NuxtAuthHandler({
    secret: process.env.SECRETS,
    providers: [
        // @ts-expect-error
        GithubProvider.default({
            clientId: '73df1b9cd4a3c289a1e8',
            clientSecret: 'd39a4cc961d1a2afc5b05b78aea5dcd6f2ae71eb'
        }),
        // @ts-expect-error
        LineProvider.default({
            clientId: "2000492469",
            clientSecret: "cb050c4ba80b75e273d1003d9c51e255"
        }),
        // @ts-expect-error
        BungieProvider.default({
            clientId: "44772",
            clientSecret: "ROW9X3wmXjA3AnvqWxSkWM0WCFVdb8v68Is7r5yPnH4",
            headers: {
                "X-API-Key": 'c4cc47abe75f4a8fae4c94963153bb34'
            },
            authorization: { params: { scope: '' } },
        }),
    ]
})