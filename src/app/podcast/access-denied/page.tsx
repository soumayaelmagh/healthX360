import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { FaRegUser } from "react-icons/fa";

async function ReligionAndScienceClient() {
  const session = await getServerSession(options);

  return (
    <section className="w-full h-screen page-section  flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl text-red-500 font-bold">
        You should be an admin to access this page
      </h1>
      {session ? (
        <Link
          href="/api/auth/signout?callbackUrl=/religion-and-science"
          className="text-xl flex items-center gap-2 font-bold text-black bg-white rounded-full shadow-lg w-fit px-4 py-2 border border-black border-opacity-15 transition-all hover:bg-red-400 hover:text-white fixed bottom-10 left-8 "
        >
          Sign out
        </Link>
      ) : (
        <Link
          href="/api/auth/signin"
          className="text-xl flex items-center gap-2 font-bold text-black bg-white rounded-full shadow-lg w-fit px-4 py-2 border border-black border-opacity-15 transition-all hover:bg-emerald-500 hover:text-white fixed bottom-10 left-8 "
        >
          <FaRegUser className="text-2xl" />
          Login as admin
        </Link>
      )}
    </section>
  );
}

export default ReligionAndScienceClient;
