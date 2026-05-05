"use client";

export default function MyProfile() {

  // demo user (later auth connect হবে)
  const user = {
    name: "Demo User",
    email: "demo@gmail.com",
    photo: "https://i.ibb.co/4pDNDk1/avatar.png"
  };

  return (
    <div className="p-6 md:p-10">

      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-base-200 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6">

        {/* PROFILE IMAGE */}
        <img
          src={user.photo}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-primary"
        />

        {/* INFO */}
        <div className="space-y-2 text-center md:text-left">

          <p className="text-xl font-bold">
            {user.name}
          </p>

          <p className="text-gray-600">
            {user.email}
          </p>

          <button className="btn btn-primary mt-3">
            <a href="/my-profile/edit" className="btn btn-primary mt-3">
  Update Info
</a>
            
          </button>

        </div>

      </div>

    </div>
  );
}