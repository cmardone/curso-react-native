import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import AboutScreen from '../screens/about/about-screen';
import ProfileScreen from '../screens/profile/profile-screen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};
