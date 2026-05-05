 import tiles from "@/data/tiles.json";

export default function TileDetails({ params }) {
  const id = params?.id;

  const tile = tiles.find((t) => t.id === id);

  if (!tile) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-red-500 text-2xl font-bold">
          Tile Not Found
        </h1>

        <p className="mt-2 text-gray-600">
          Requested ID: {id || "undefined"}
        </p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">{tile.title}</h1>
    </div>
  );
}