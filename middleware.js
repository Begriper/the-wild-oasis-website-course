// middleware.js (v koreňovom adresári projektu)
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Použitie withAuth namiesto priameho exportu auth funkcie
export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      // Tu je authorized callback v NextAuth v4
      authorized({ token }) {
        // Ekvivalent lektorovho !!auth?.user
        return !!token;
      }
    }
  }
);

// Rovnaký matcher aký používa lektor
export const config = {
  matcher: ["/account"]
};