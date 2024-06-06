import {FetchAdapter} from '@/config/adapters/http/fetch-adapter';
import {THEMOVIEDB_API_KEY} from '@env';

export const movieDBFetcher = new FetchAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: THEMOVIEDB_API_KEY,
    language: 'es',
  },
});
