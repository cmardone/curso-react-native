import {movieDBFetcher} from '@/config/adapters/fetch-adapter';
import {Movie} from '@/core/entities/movie-entity';
import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';

const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    setIsLoading(true);
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        nowPlayingPromise,
        upcomingPromise,
        topRatedPromise,
        popularPromise,
      ]);
    setNowPlaying(nowPlayingMovies);
    setUpcoming(upcomingMovies);
    setTopRated(topRatedMovies);
    setPopular(popularMovies);
    setIsLoading(false);
  };

  return {
    nowPlaying,
    popular,
    topRated,
    upcoming,
    isLoading,
  };
};

export default useMovies;
