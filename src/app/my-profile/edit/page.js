"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setImage(localStorage.getItem("image") || "");
  }, []);

  const handleUpdate = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("image", image);

    alert("Profile Updated Successfully");

    router.push("/my-profile");
  };

  return (
    <div className="h-screen flex items-center justify-center">

      <div className="p-6 shadow-xl rounded-xl w-96 space-y-4">

        <h1 className="text-xl font-bold text-center">
          Update Profile
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          className="input input-bordered w-full"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          className="input input-bordered w-full"
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