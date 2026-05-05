"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // demo validation (later backend connect হবে)
    if (email && password) {
      alert("Login Successful (Demo)");
      window.location.href = "/";
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">

      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow-md">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* BUTTON */}
          <button className="btn btn-primary w-full">
            Login
          </button>

        </form>

        {/* LINKS */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}