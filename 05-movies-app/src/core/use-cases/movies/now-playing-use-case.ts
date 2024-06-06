import {HttpAdapter} from '@/config/adapters/http/http-adapter';
import {Movie} from '@/core/entities/movie-entity';
import {NowPlayingResponse} from '@/infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '@/infrastructure/mappers/movie-mapper';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
  page: number,
): Promise<Movie[]> => {
  try {
    let endpoint = '/now_playing';
    if (page > 1) {
      endpoint += `?page=${page}`;
    }
    const nowPlaying = await fetcher.get<NowPlayingResponse>(endpoint);

    return nowPlaying.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - NowPlaying');
  }
};
