import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox} />
      <View style={styles.orangeBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redBox: {
    backgroundColor: 'red',
    flex: 1,
  },
  orangeBox: {
    backgroundColor: 'darkorange',
    flex: 2,
  },
  greenBox: {
    backgroundColor: 'green',
    flex: 3,
  },
});

export default FlexScreen;
