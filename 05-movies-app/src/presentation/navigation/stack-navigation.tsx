import DetailsScreen from '@/presentation/screens/details/details-screen';
import HomeScreen from '@/presentation/screens/home/home-screen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type RootStackParams = {
  Home: undefined;
  Details: {movieId: number};
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
