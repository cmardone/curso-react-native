import {movieDBFetcher} from '@/config/adapters/fetch-adapter';
import {Cast} from '@/core/entities/cast-entity';
import {FullMovie} from '@/core/entities/movie-entity';
import * as UseCases from '@/core/use-cases';
import {useEffect, useState} from 'react';

const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fullMovie, setFullMovie] = useState<FullMovie>();
  const [movieCast, setMovieCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = async () => {
    const fullMovie = await UseCases.getMovieDetailUseCase(
      movieDBFetcher,
      movieId,
    );
    setFullMovie(fullMovie);
    setIsLoading(false);
    UseCases.getMovieCastUseCase(movieDBFetcher, movieId).then((cast: Cast[]) =>
      setMovieCast(cast),
    );
  };

  return {
    isLoading,
    fullMovie,
    movieCast,
  };
};

export default useMovie;
