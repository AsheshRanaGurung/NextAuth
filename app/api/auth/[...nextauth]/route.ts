import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import { log } from "console";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async session({ session }: { session: any }) {
            console.log(session, "session");
            const sessionUser = await User.findOne({
                email: session.user.email,
            });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ profile }: { profile: any }) {
            try {
                await connectToDB();
                const userExists = await User.findOne({
                    email: profile.email,
                });
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        userName: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                    });
                }
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        },
    },
});

export { handler as GET, handler as POST };
