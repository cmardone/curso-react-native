import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'aliceblue',
  },
  box1: {
    backgroundColor: 'powderblue',
    flex: 1,
    // width: 100,
    // height: 100,
  },
  box2: {
    backgroundColor: 'skyblue',
    flex: 1,
    // width: 100,
    // height: 100,
  },
  box3: {
    backgroundColor: 'steelblue',
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

export default FlexDirectionScreen;
