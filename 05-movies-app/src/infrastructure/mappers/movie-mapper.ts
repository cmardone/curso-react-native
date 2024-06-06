import {Cast} from '@/core/entities/cast-entity';
import {FullMovie, Movie} from '@/core/entities/movie-entity';
import {
  MovieCast,
  MovieDetailResponse,
  Result,
} from '@/infrastructure/interfaces/movie-db-responses';

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

  static fromMovieDbDetailToEntity(result: MovieDetailResponse): FullMovie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      releaseDate: new Date(result.release_date),
      genres: result.genres.map(genre => genre.name),
      duration: result.runtime,
      budget: result.budget,
      originalTitle: result.original_title,
      productionCompanies: result.production_companies.map(
        company => company.name,
      ),
    };
  }

  static fromMovieDbCreditsToEntity(result: MovieCast): Cast {
    return {
      id: result.id,
      name: result.name,
      character: result.character ?? '',
      avatar: result.profile_path
        ? `https://image.tmdb.org/t/p/w500${result.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
