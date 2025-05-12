import { MdLogout } from "react-icons/md";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";
import AdminArticlesPage from "@/components/articles/admin";

async function ReligionAndScienceAdmin() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }

  console.log("ADMIN PAGE");

  return (
    <section className="w-full h-auto min-h-screen page-section ">
      <h1 className="font-bold text-emerald-500 text-3xl">
        Welcome, {session?.user?.name}
      </h1>
      <AdminArticlesPage />

      <Link
        href="/api/auth/signout?callbackUrl=/religion-and-science"
        className="text-xl flex items-center gap-2 font-bold text-black bg-white rounded-full shadow-lg w-fit px-4 py-2 border border-black border-opacity-15 transition-all hover:bg-red-400 hover:text-white fixed bottom-10 left-8 "
      >
        <MdLogout className="text-2xl" />
        Logout
      </Link>
    </section>
  );
}

export default ReligionAndScienceAdmin;
