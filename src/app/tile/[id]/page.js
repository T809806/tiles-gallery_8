 "use client";

import { useParams } from "next/navigation";
import tiles from "@/data/tiles.json";

export default function TileDetails() {
  const { id } = useParams();

  const tile = tiles.find((t) => t.id === id);

  if (!tile) {
    return (
      <p className="p-10 text-center">
        Tile Not Found
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-10 grid md:grid-cols-2 gap-10">

      <img
        src={tile.image}
        className="w-full h-96 object-cover rounded-xl"
      />

      <div className="space-y-4">

        <h1 className="text-3xl font-bold">
          {tile.title}
        </h1>

        <p>Category: {tile.category}</p>
        <p>{tile.description}</p>

        <p className="font-bold">
          💲 {tile.price} {tile.currency}
        </p>

      </div>

    </div>
  );
}