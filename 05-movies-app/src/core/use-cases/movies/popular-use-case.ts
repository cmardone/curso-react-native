import {HttpAdapter} from '@/config/adapters/http/http-adapter';
import {Movie} from '@/core/entities/movie-entity';
import {PopularResponse} from '@/infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '@/infrastructure/mappers/movie-mapper';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  page: number,
): Promise<Movie[]> => {
  try {
    let endpoint = '/popular';
    if (page > 1) {
      endpoint += `?page=${page}`;
    }
    const popular = await fetcher.get<PopularResponse>(endpoint);
    return popular.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Popular');
  }
};
