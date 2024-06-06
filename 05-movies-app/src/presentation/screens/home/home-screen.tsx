import FullScreenLoader from '@/presentation/components/full-screen-loader';
import HorizontalCarousel from '@/presentation/components/movies/horizontal-carousel';
import PosterCarousel from '@/presentation/components/movies/poster-carousel';
import useMovies from '@/presentation/hooks/use-movies';
import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {
    nowPlaying,
    popular,
    upcoming,
    topRated,
    isLoading,
    loadPopularNextPage,
    loadTopRatedNextPage,
    loadUpcomingNextPage,
  } = useMovies();
  if (isLoading) return <FullScreenLoader />;
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel
          movies={popular}
          height={180}
          title="Popular"
          loadNextPage={loadPopularNextPage}
        />
        <HorizontalCarousel
          movies={topRated}
          height={180}
          title="Top Rated"
          loadNextPage={loadTopRatedNextPage}
        />
        <HorizontalCarousel
          movies={upcoming}
          height={180}
          title="Upcoming"
          loadNextPage={loadUpcomingNextPage}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
