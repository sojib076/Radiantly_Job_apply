import { Movie } from "@/type/movies";
import AOS from "aos";
import { useEffect } from "react";

const MovieCard = ({ movie } :{movie:Movie}) => {
    useEffect(() => {
        AOS.init({ duration: 500 ,
            

        }); 

      }, []);
  return (
    
        <div data-aos='fade-up' key={movie.id} className="lg:max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 lg:pb-4">
      <img
        className="w-full h-64 object-cover bg-slate-300"
        src={movie.image}
        alt={movie.movie}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">{movie.movie}</div>
        <p className="text-gray-700 text-base">
          IMDb Rating: {movie.rating}
        </p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <a
          href={movie.imdb_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-yellow-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded
            hover:scale-110 transition duration-300 ease-in-out
          "
        >
          View on IMDb
        </a>
      </div>
    </div>
   
    
  );
};

export default MovieCard;
