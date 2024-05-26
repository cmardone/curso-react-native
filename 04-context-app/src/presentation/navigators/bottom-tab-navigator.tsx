import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ProfileScreen from '../profile/profile-screen';
import HomeScreen from '../screens/home/home-screen';
import SettingsScreen from '../settings/settings-screen';
import {useCounterStore} from '../store/counter-store';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const count = useCounterStore(state => state.count);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Text style={{color: color, ...styles.icon}}>H</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Text style={{color: color, ...styles.icon}}>P</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Text style={{color: color, ...styles.icon}}>S</Text>
          ),
          title: `Count ${count}`,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default BottomTabNavigator;
