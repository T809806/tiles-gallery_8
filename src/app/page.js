import Link from "next/link";
import tiles from "@/data/tiles.json";

      export default function Home() {
        const featured = tiles.slice(0, 4);

  return (

    <div className="min-h-screen px-4 md:px-10 py-10 space-y-12 bg-slate-50">

       <section className="bg-gradient-to-r from-indigo-100 via-sky-100 to-cyan-100 border rounded-3xl shadow-md text-center py-20 px-6">

           <h1 className="text-3xl md:text-5xl font-bold text-gray-800"> Discover Your Perfect Aesthetic </h1>
           <p className="mt-4 text-gray-600 text-sm md:text-lg"> Premium tile collection for modern homes & interiors </p>

           <Link
              href="/all-tiles"
              className="inline-block mt-6 bg-sky-500  text-white px-6 py-3 rounded-full hover:bg-sky-600 transition"
           >

              Browse Now

           </Link>

        </section>

     
   <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
   <div className="relative flex overflow-hidden py-3">
   <div className="flex whitespace-nowrap animate-scroll text-sm font-medium text-gray-600 gap-10 px-4">

      <span> New Arrivals: {tiles[0]?.title} </span>
      <span> | Weekly Feature: Modern Geometric Patterns </span>
      <span> | Trending: Marble Luxury Tiles </span>
      <span> | Join the Community Today </span>
      <span> New Arrivals: {tiles[0]?.title} </span>
      <span> | Weekly Feature: Modern Geometric Patterns </span>
      <span> | Trending: Marble Luxury Tiles </span>
      <span> | Join the Community Today </span>

    </div>

  </div>

</div>

 <div className="text-center">

   <h2 className="text-2xl md:text-3xl font-bold text-gray-800"> Featured Tiles </h2>
   <p className="text-gray-500 text-sm mt-1"> Handpicked premium designs </p>

  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

       {featured.map((tile) => (

     <div
        key={tile.id}
        className="bg-white border rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"

      >

       <img
           src={tile.image}
           alt={tile.title}
           className="h-44 w-full object-cover"

       />

      <div className="p-4 space-y-2">

         <h3 className="font-semibold text-gray-800"> {tile.title} </h3>
         <p className="text-xs text-gray-500"> {tile.category} </p>
         <p className="text-sm text-gray-700"> 💲 {tile.price} {tile.currency} </p>

        <Link
           href={`/tile/${tile.id}`}
           className="btn btn-sm w-full bg-sky-500  text-white hover:bg-sky-600"
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