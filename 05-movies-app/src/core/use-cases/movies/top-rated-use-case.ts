import {HttpAdapter} from '@/config/adapters/http/http-adapter';
import {Movie} from '@/core/entities/movie-entity';
import {TopRatedResponse} from '@/infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '@/infrastructure/mappers/movie-mapper';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<TopRatedResponse>('/top_rated');
    return topRated.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Top Rated');
  }
};
