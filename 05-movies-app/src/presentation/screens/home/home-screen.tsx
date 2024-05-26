import useMovies from '@/presentation/hooks/use-movies';
import React from 'react';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  const {nowPlaying} = useMovies();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{JSON.stringify(nowPlaying, null, 2)}</Text>
    </View>
  );
};

export default HomeScreen;
