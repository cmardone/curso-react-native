import {HttpAdapter} from '@/config/adapters/http/http-adapter';
import {FullMovie} from '@/core/entities/movie-entity';
import {MovieDetailResponse} from '@/infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '@/infrastructure/mappers/movie-mapper';

export const getMovieDetailUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    let endpoint = `/${movieId}`;
    const detail = await fetcher.get<MovieDetailResponse>(endpoint);
    return MovieMapper.fromMovieDbDetailToEntity(detail);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movie detail');
  }
};
