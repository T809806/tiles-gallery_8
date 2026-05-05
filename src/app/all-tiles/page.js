"use client";

import Link from "next/link";
import tiles from "@/data/tiles.json";

export default function AllTilesPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        All Tiles Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >

            <img
              src={tile.image}
              alt={tile.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-4 space-y-2">

              <h2 className="text-lg font-bold">
                {tile.title}
              </h2>

              <p className="text-sm text-gray-500">
                {tile.category}
              </p>

              <p className="font-semibold text-gray-700">
                💲 {tile.price} {tile.currency}
              </p>

              <Link
                href={`/tile/${tile.id}`}
                className="inline-block mt-2 text-blue-600 font-medium hover:underline"
              >
                View Details
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}