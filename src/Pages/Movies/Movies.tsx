import MovieCard from "@/components/ui/MoiveCard";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { fetchMovies } from "@/services/movieService";
import { Movie } from "@/type/movies";
import { useEffect, useState } from "react";




const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
      setLoading(false);
    };
    getMovies();
  }, []);



  return (
    <div className="lg:p-20 p-5 ">
      <h1  className="text-5xl text-center lg:mb-10 mb-2 text-white font-extrabold  ">Movie Database</h1>
      
           
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4   ">
                {
                    loading ? (
                       Array.from({ length: 9 }).map((_,index) => (
                        <SkeletonCard key={index} />
                       ))
                    ) : (
                        movies.map((movie) => (
                        
                            <MovieCard movie={movie} />
                        
                        ))
                    )
                }

                </div>
            
        

     
    </div>
  );
};

export default MovieList;
