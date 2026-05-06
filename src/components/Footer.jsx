import Link from "next/link";

export default function Footer() {

  return (
    
    <footer className="bg-base-200 mt-10">

         <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        
         <div>
             <h2 className="text-xl font-bold text-primary"> 🧱 TilesGallery </h2>
             <p className="text-sm mt-2 text-gray-500"> Discover premium tiles for your home and interior design. Modern, stylish, and durable collections. </p>
         </div>

         <div>
            <h3 className="font-semibold mb-3"> Quick Links </h3>

            <ul className="space-y-2 text-sm">

            <li> <Link href="/" className="hover:text-primary"> Home </Link> </li>
            <li> <Link href="/all-tiles" className="hover:text-primary"> All Tiles </Link> </li>
            <li> <Link href="/my-profile" className="hover:text-primary"> My Profile </Link> </li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold mb-3"> Contact Us </h3>
            <p className="text-sm text-gray-500"> 📧 support@tilesgallery.com </p>
            <p className="text-sm text-gray-500"> 📞 +880 1234-500000 </p>
            <p className="text-sm text-gray-500"> 📍 Dhaka,Bangladesh </p>

         <div className="flex gap-4 mt-4">

            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:scale-110 transition"
            >
             <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="facebook"/>

            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/24/733/733579.png"
                alt="twitter"
              />

            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/24/733/733558.png"
                alt="instagram"
              />

            </a>

   </div>
   </div>

       </div>

     
       <div className="text-center text-sm py-4 border-t">

           © {new Date().getFullYear()} TilesGallery. All rights reserved.

       </div>

    </footer>

  );
}