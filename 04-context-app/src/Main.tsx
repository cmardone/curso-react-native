import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomTabNavigator from './presentation/navigators/bottom-tab-navigator';

const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default Main;
