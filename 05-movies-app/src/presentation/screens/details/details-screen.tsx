import FullScreenLoader from '@/presentation/components/full-screen-loader';
import MovieDetails from '@/presentation/components/movie/movie-details';
import MovieHeader from '@/presentation/components/movie/movie-header';
import useMovie from '@/presentation/hooks/use-movie';
import {RootStackParams} from '@/presentation/navigation/stack-navigation';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView} from 'react-native';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}
const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  const {fullMovie, movieCast, isLoading} = useMovie(movieId);

  if (isLoading) return <FullScreenLoader />;

  return (
    <ScrollView>
      {fullMovie && <MovieHeader movie={fullMovie} />}
      {fullMovie && (
        <MovieDetails movie={fullMovie} movieCast={movieCast ?? []} />
      )}
    </ScrollView>
  );
};

export default DetailsScreen;
