import React from 'react';
import {StyleSheet, View} from 'react-native';

const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    borderColor: 'white',
    borderWidth: 10,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    left: 100,
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
    left: 100,
  },
  blueBox: {
    backgroundColor: '#28c4d9',
    top: 100,
    left: -100,
  },
});

export default HomeWorkScreen;
