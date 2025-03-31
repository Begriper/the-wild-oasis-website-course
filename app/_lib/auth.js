// app/lib/auth.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth/next";
import { createGuest, getGuest } from "@/app/_lib/data-service";


export const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        // JWT callback - povinný vo verzii 4
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },

        // Session callback - získame hosťa zo Supabase a pridáme jeho ID do session
        async session({ session, token }) {
            session.user = token.user;

            try {
                const guest = await getGuest(session.user.email);
                if (guest) {
                    session.user.guestId = guest.id;
                }
            } catch (error) {
                console.error("Chyba pri získavaní ID hosťa:", error);
            }

            return session;
        },

        // SignIn callback - vytvorí nového hosťa pri prvom prihlásení
        async signIn({ user }) {
            try {
                const existingGuest = await getGuest(user.email);

                if (!existingGuest) {
                    await createGuest({
                        email: user.email,
                        fullName: user.name,
                    });
                }

                return true;
            } catch (error) {
                console.error("Chyba pri prihlásení:", error);
                return false;
            }
        },
    },
    pages: {
        signIn: "/login",
    },
};

// Handler pre API routes
const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };

// Funkcia na získanie session v server komponentoch
export const auth = () => getServerSession(authConfig);
