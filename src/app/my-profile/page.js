"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

       export default function Profile() {

          const router = useRouter();
          const [user, setUser] = useState(null);

    useEffect(() => {

          const checkUser = async () => {
          const session = await authClient.getSession();

      if (!session?.data) {
        router.push("/login");
      } else {
        setUser(session.data.user);
      }
    };

    checkUser();
  }, []);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (

    <div className="p-10 text-center space-y-4">

      <img
            src={
            user.image ||
            "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
       }

        className="w-32 h-32 rounded-full mx-auto object-cover"

      />

      <h1 className="text-2xl font-bold"> {user.name} </h1>
      <p> {user.email} </p>

      <Link
        href="/my-profile/edit"
        className="btn bg-sky-500 hover:bg-sky-600 text-white"
      >

        Edit Profile
        
      </Link>

    </div>
  );
}