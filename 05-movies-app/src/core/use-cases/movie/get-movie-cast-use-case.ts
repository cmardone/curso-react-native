import {HttpAdapter} from '@/config/adapters/http/http-adapter';
import {Cast} from '@/core/entities/cast-entity';
import {MovieCreditsResponse} from '@/infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '@/infrastructure/mappers/movie-mapper';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    let endpoint = `/${movieId}/credits`;
    const movieCast = await fetcher.get<MovieCreditsResponse>(endpoint);
    return movieCast.cast.map(MovieMapper.fromMovieDbCreditsToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movie cast');
  }
};
