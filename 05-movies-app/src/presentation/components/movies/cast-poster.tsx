import {Cast} from '@/core/entities/cast-entity';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  cast: Cast;
}

const CastPoster = ({cast}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: cast.avatar}} style={styles.image} />
      <View style={styles.actorInfo}>
        <Text
          style={{fontSize: 15, justifyContent: 'center', fontWeight: 'bold'}}>
          {cast.name}
        </Text>
        <Text style={{fontSize: 12, justifyContent: 'center', opacity: 0.7}}>
          {cast.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {marginLeft: 10, marginTop: 4},
  image: {
    borderRadius: 10,
    width: 100,
    height: 150,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});

export default CastPoster;
