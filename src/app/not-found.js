export default function NotFound() {

  return (

    <div className="h-screen flex flex-col items-center justify-center text-center bg-base-100">

         <h1 className="text-5xl font-bold text-red-500"> 404 </h1>
         <h2 className="text-2xl font-semibold mt-2"> Page Not Found </h2>
         <p className="text-gray-500 mt-2"> The page you are looking for doesn’t exist. </p>

         <a
          href="/"
          className="mt-5 btn bg-sky-500 hover:bg-sky-600 text-white"
         >
        
        Go Home

      </a>

    </div>
  );
}