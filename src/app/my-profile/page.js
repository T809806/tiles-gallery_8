"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Profile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name") || "Guest");
    setImage(localStorage.getItem("image") || "");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">

      <div className="p-8 rounded-xl shadow-lg text-center w-80 bg-white space-y-4">

        <img
          src={image || "https://via.placeholder.com/150"}
          className="w-28 h-28 rounded-full mx-auto border-4 border-sky-500"
        />

        <h1 className="text-2xl font-bold">{name}</h1>

        <p className="text-gray-500 text-sm">
          Welcome to your profile
        </p>

        <Link
          href="/my-profile/edit"
          className="btn bg-sky-500 hover:bg-sky-600 text-white w-full"
        >
          Edit Profile
        </Link>

      </div>

    </div>
  );
}