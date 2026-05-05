"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("image", image);

    router.push("/my-profile");
  };

  return (
    <div className="h-screen flex items-center justify-center">

      <div className="p-6 shadow-xl rounded-xl w-96 space-y-4">

        <h1 className="text-xl font-bold">Update Profile</h1>

        <input
          className="input input-bordered w-full"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />

        <button
          onClick={handleUpdate}
          className="btn bg-sky-500 hover:bg-sky-600 text-white w-full"
        >
          Update
        </button>

      </div>

    </div>
  );
}