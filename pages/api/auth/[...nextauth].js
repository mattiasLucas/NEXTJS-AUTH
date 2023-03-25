import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    secret: process.env.NextAuth_SECRET,

    //configure one or more authentication providers

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ]
}

export default nextAuth(authOptions);