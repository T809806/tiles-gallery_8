"use client";

import { useState } from "react";
import tiles from "@/data/tiles.json";
import Link from "next/link";

export default function AllTiles() {
  const [search, setSearch] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search tiles..."
        className="input input-bordered w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {filteredTiles.map((tile) => (
          <div
            key={tile.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >

            <img
              src={tile.image}
              className="h-40 w-full object-cover rounded-lg"
            />

            <h2 className="text-lg font-bold mt-2">
              {tile.title}
            </h2>

            <Link
              href={`/tile/${tile.id}`}
              className="btn bg-sky-500 hover:bg-sky-600 text-white w-full mt-3"
            >
              Details
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}