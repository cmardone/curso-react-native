import {Movie} from '@/core/entities/movie-entity';
import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MoviePoster from './movie-poster';

interface Props {
  movies: Movie[];
  height?: number;
}

const PosterCarousel = ({movies, height = 420}: Props) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster
            key={movie.id}
            movie={movie}
            height={height}
            width={height / 1.666}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PosterCarousel;
