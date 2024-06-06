import {movieDBFetcher} from '@/config/adapters/fetch-adapter';
import {Movie} from '@/core/entities/movie-entity';
import {useEffect, useRef, useState} from 'react';
import * as UseCases from '../../core/use-cases';

const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nowPlayingPage = useRef<number>(1);
  const upcomingPage = useRef<number>(1);
  const topRatedPage = useRef<number>(1);
  const popularPage = useRef<number>(1);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    setIsLoading(true);
    nowPlayingPage.current = 1;
    upcomingPage.current = 1;
    topRatedPage.current = 1;
    popularPage.current = 1;
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
      nowPlayingPage.current,
    );
    const upcomingPromise = UseCases.moviesUpcomingUseCase(
      movieDBFetcher,
      upcomingPage.current,
    );
    const topRatedPromise = UseCases.moviesTopRatedUseCase(
      movieDBFetcher,
      topRatedPage.current,
    );
    const popularPromise = UseCases.moviesPopularUseCase(
      movieDBFetcher,
      popularPage.current,
    );
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

  const loadPopularNextPage = async () => {
    console.log(`loading popular page ${popularPage.current}`);
    const nextPage = popularPage.current + 1;
    popularPage.current = nextPage;
    const nextMovies = await UseCases.moviesPopularUseCase(
      movieDBFetcher,
      nextPage,
    );
    setPopular([...popular, ...nextMovies]);
  };

  const loadTopRatedNextPage = async () => {
    console.log(`loading topRated page ${topRatedPage.current}`);
    const nextPage = topRatedPage.current + 1;
    topRatedPage.current = nextPage;
    const nextMovies = await UseCases.moviesTopRatedUseCase(
      movieDBFetcher,
      nextPage,
    );
    setTopRated([...topRated, ...nextMovies]);
  };

  const loadUpcomingNextPage = async () => {
    console.log(`loading upcoming page ${upcomingPage.current}`);
    const nextPage = upcomingPage.current + 1;
    upcomingPage.current = nextPage;
    const nextMovies = await UseCases.moviesUpcomingUseCase(
      movieDBFetcher,
      nextPage,
    );
    setUpcoming([...upcoming, ...nextMovies]);
  };

  const loadNowPlayingNextPage = async () => {
    console.log(`loading nowPlaying page ${nowPlayingPage.current}`);
    const nextPage = nowPlayingPage.current + 1;
    nowPlayingPage.current = nextPage;
    const nextMovies = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
      nextPage,
    );
    setNowPlaying([...nowPlaying, ...nextMovies]);
  };

  return {
    nowPlaying,
    popular,
    topRated,
    upcoming,
    isLoading,
    loadNowPlayingNextPage,
    loadPopularNextPage,
    loadTopRatedNextPage,
    loadUpcomingNextPage,
  };
};

export default useMovies;
