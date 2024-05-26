import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../theme/global.styles';

const CounterM3Screen = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>
      <Icon name="accessibility-outline" size={25} />
      <FAB
        icon="add"
        style={globalStyles.floatingActionButton}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      />
    </View>
  );
};

export default CounterM3Screen;
