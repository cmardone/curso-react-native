import React from 'react';
import {StyleSheet, View} from 'react-native';

const PositionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    height: 100,
    width: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    height: 100,
    width: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  greenBox: {
    // height: 100,
    // width: 100,
    backgroundColor: '#00ff7f',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // right: 0,
    // bottom: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});

export default PositionsScreen;
