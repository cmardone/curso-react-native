import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../config/app-theme';
import {useCounterStore} from '../store/counter-store';

const SettingsScreen = () => {
  const incrementBy = useCounterStore(state => state.incrementBy);
  const count = useCounterStore(state => state.count);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <Pressable style={styles.primaryButton} onPress={() => incrementBy(-1)}>
        <Text>- 1</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => incrementBy(1)}>
        <Text>+ 1</Text>
      </Pressable>
    </View>
  );
};

export default SettingsScreen;
