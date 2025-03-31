"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
    return (
        <button
            onClick={() => signIn("google", { callbackUrl: "/account" })}
            className="flex items-center gap-6 px-10 py-4 text-lg font-medium border border-primary-300"
        >
            <img
                src="https://authjs.dev/img/providers/google.svg"
                alt="Google logo"
                height="24"
                width="24"
            />
            <span>Continue with Google</span>
        </button>
    );
}
 