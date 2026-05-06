"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; // check path

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email(
        {
          email,
          password,
          name,
          callbackURL: "/login",
        }
      );

      if (error) {
        alert(error.message);
        return;
      }

      alert("Registration Successful!");

      router.push("/login");

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">

      <div className="p-6 shadow-xl rounded-xl w-96 space-y-4">

        <h1 className="text-xl font-bold text-center">
          Create Account
        </h1>

        {/* NAME */}
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          onChange={(e) => setName(e.target.value)}
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          className="btn bg-sky-500 hover:bg-sky-600 text-white w-full"
        >
          Register
        </button>

      </div>

    </div>
  );
}