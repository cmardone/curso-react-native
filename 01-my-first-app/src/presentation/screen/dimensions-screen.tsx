import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {Text} from 'react-native-paper';

const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.5,
          }}
        />
      </View>
      <Text>
        w: {width}, h: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 300,
    backgroundColor: 'lightcoral',
  },
  purpleBox: {
    height: '50%',
    width: '50%',
    backgroundColor: '#5856d6',
  },
});
export default DimensionsScreen;
