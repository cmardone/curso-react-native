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
  },
  box: {
    borderColor: 'white',
    borderWidth: 10,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    flex: 1,
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
    flex: 1,
  },
  blueBox: {
    backgroundColor: '#28c4d9',
    flex: 2,
  },
});

export default HomeWorkScreen;
