import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useCounterStore} from '../../store/counter-store';
import {useProfileStore} from '../../store/profile-store';

const HomeScreen = () => {
  const {name, email} = useProfileStore(state => state);
  const count = useCounterStore(state => state.count);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>Count: {count}</Text>
    </View>
  );
};

export default HomeScreen;
