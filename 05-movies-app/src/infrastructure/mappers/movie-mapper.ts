import {Movie} from '@/core/entities/movie-entity';
import {Result} from '../interfaces/movie-db-responses';

export class MovieMapper {
  static fromMovieDbResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      releaseDate: new Date(result.release_date),
    };
  }
}