"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; // path check

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Login Successful!");

      router.push("/");

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">

      <div className="p-6 shadow-xl rounded-xl w-96 space-y-4">

        <h1 className="text-xl font-bold text-center">
          Login
        </h1>

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
          onClick={handleLogin}
          className="btn bg-sky-500 hover:bg-sky-600 text-white w-full"
        >
          Login
        </button>

        {/* REGISTER LINK */}
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-sky-500">
            Register
          </a>
        </p>

      </div>

    </div>
  );
}