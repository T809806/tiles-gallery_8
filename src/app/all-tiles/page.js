"use client";

import { useState } from "react";
import Link from "next/link";
import tiles from "@/data/tiles.json";

export default function AllTilesPage() {
  const [search, setSearch] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search tiles..."
        className="input input-bordered w-full mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {filteredTiles.map((tile) => (
          <div key={tile.id} className="card shadow-lg">

            <img
              src={tile.image}
              className="h-40 w-full object-cover"
            />

            <div className="p-4 space-y-2">

              <h3 className="font-bold">{tile.title}</h3>

              <p className="text-sm text-gray-500">
                {tile.category}
              </p>

              <Link
                href={`/tile/${tile.id}`}
                className="btn bg-sky-500 hover:bg-sky-600 text-white btn-sm"
              >
                Details
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}