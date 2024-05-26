import {HttpAdapter} from '@/config/adapters/http/http-adapter';
import {Movie} from '@/core/entities/movie-entity';
import {UpcomingResponse} from '@/infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '@/infrastructure/mappers/movie-mapper';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<UpcomingResponse>('/upcoming');
    return upcoming.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Upcoming');
  }
};
