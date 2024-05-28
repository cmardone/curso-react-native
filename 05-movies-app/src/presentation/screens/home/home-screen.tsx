import HorizontalCarousel from '@/presentation/components/movies/horizontal-carousel';
import PosterCarousel from '@/presentation/components/movies/poster-carousel';
import useMovies from '@/presentation/hooks/use-movies';
import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, upcoming, topRated, isLoading} = useMovies();
  if (isLoading) return <Text>Loading...</Text>;
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel movies={popular} height={180} title="Popular" />
        <HorizontalCarousel movies={topRated} height={180} title="Top Rated" />
        <HorizontalCarousel movies={upcoming} height={180} title="Upcoming" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
