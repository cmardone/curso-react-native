import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.purpleBox}>
        <Text style={styles.purpleText}>Hello world!</Text>
      </View>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  title: {
    borderWidth: 10,
    color: 'black',
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: 30,
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 5,
  },
  purpleText: {
    color: 'white',
  },
});

export default BoxObjectModelScreen;
