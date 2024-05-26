import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1Screen from '../screens/tabs/tab1-screen';
import { colors } from '../themes/theme';
import { StackNavigator } from './stack-navigator';
import { TopTabNavigator } from './top-tab-navigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { marginBottom: 5 },
        headerStyle: { elevation: 0, shadowColor: 'transparent' },
        tabBarStyle: { borderTopWidth: 0, elevation: 0 },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color }) => (
            <Icon name="airplane-outline" size={30} color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => (
            <Icon name="bonfire-outline" size={30} color={color} />
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => (
            <Icon name="beer-outline" size={30} color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
