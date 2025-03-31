import { auth } from "@/app/_lib/auth";

export const metadata = {
    title: "Guest area",
};

export default async function Page() {
    const session = await auth();
    const firstName = session.user.name.split(" ").at(0);

    return (
        <h2 className="text-2xl font-semibold text-accent-400 mb-7">
            Welcome, {firstName}
        </h2>
    );
}
