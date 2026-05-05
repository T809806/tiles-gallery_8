"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name && form.email && form.password) {
      alert("Registration Successful (Demo)");
      window.location.href = "/login";
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">

      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={handleChange}
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={form.email}
            onChange={handleChange}
          />

          {/* PHOTO */}
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={form.photo}
            onChange={handleChange}
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={form.password}
            onChange={handleChange}
          />

          {/* BUTTON */}
          <button className="btn btn-primary w-full">
            Register
          </button>

        </form>

        {/* LINK */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}