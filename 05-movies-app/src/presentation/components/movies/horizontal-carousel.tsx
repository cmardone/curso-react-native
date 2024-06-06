import {Movie} from '@/core/entities/movie-entity';
import React, {useEffect, useRef} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MoviePoster from './movie-poster';

interface Props {
  movies: Movie[];
  title?: string;
  height?: number;
  loadNextPage?: () => void;
}

const HorizontalCarousel = ({
  movies,
  title,
  height = 440,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current && loadNextPage) return;
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width * 2 > contentSize.width;
    if (!isEndReached) return;
    isLoading.current = true;
    loadNextPage?.();
  };

  return (
    <View style={{height: title ? height + 40 : height}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <MoviePoster movie={item} height={height} width={height / 1.666} />
        )}
        onScroll={handleOnScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 10,
    marginLeft: 20,
  },
});

export default HorizontalCarousel;
