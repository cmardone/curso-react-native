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
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  box: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
  },
  blueBox: {
    backgroundColor: '#28c4d9',
    width: '100%',
  },
});

export default HomeWorkScreen;