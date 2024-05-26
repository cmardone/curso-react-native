import {HttpAdapter} from '@/config/adapters/http/http-adapter';
import {Movie} from '@/core/entities/movie-entity';
import {PopularResponse} from '@/infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '@/infrastructure/mappers/movie-mapper';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularResponse>('/popular');
    return popular.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Popular');
  }
};
