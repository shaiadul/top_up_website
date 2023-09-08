import GoogleProvider from 'next-auth/providers/google';
import { CredentialsProvider } from 'next-auth/providers/credentials';

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { 
                    label: "Username", 
                    type: "text", 
                    placeholder: "your username" 
                },
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "your email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your password"
                }
            },
            async authorize(credentials, req) {
                const user ={
                    id: 1,
                    name: "Shaiadul",
                    email: "mdshaiadul@gmail.com",
                    password: "123456"
                }
                if (credentials?.username === user.name && credentials?.password === user.password && credentials?.email === user.email) {
                    return user
                } else {
                    return null
                }
            }
        })

    ],
};