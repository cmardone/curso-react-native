import {Formatter} from '@/config/helpers/formatter';
import {Cast} from '@/core/entities/cast-entity';
import {FullMovie} from '@/core/entities/movie-entity';
import CastPoster from '@/presentation/components/movies/cast-poster';
import React from 'react';
import {FlatList, Text, View} from 'react-native';

interface Props {
  movie: FullMovie;
  movieCast: Cast[];
}

const MovieDetails = ({movie, movieCast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}> - {movie.genres.join(', ')}</Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movie.description}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18}}>{Formatter.currency(movie.budget)}</Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 50}}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={movieCast}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <CastPoster cast={item} />}
        />
      </View>
    </>
  );
};

export default MovieDetails;
