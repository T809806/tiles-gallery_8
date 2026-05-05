"use client";

import { useState } from "react";

export default function EditProfile() {

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !photo) {
      alert("Please fill all fields");
      return;
    }

    alert("Profile Updated Successfully (Demo)");

    // redirect back
    window.location.href = "/my-profile";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">

      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6">
          Update Profile
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">

          {/* NAME */}
          <input
            type="text"
            placeholder="Update Name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* PHOTO */}
          <input
            type="text"
            placeholder="Update Photo URL"
            className="input input-bordered w-full"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          {/* BUTTON */}
          <button className="btn btn-primary w-full">
            Update Information
          </button>

        </form>

      </div>

    </div>
  );
}