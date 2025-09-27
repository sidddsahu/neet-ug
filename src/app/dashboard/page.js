"use client";

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>You must sign in first</p>;

  return (
    <div className="p-6">
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <img src={session.user.image} alt="avatar" className="w-16 h-16 rounded-full" />
      <button
        onClick={() => signOut({ callbackUrl: "/auth/signin" })}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Sign out
      </button>
    </div>
  );
}
