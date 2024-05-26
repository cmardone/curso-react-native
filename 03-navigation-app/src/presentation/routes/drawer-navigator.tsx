import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import IonIcon from '../components/shared/ionicon';
import ProfileScreen from '../screens/profile/profile-screen';
import { colors } from '../themes/theme';
import { BottomTabNavigator } from './bottom-tab-navigator';
import { StackNavigator } from './stack-navigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width > 768 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: colors.primary,
        drawerItemStyle: {
          borderRadius: 10,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="bug-outline" color={color} />
          ),
        }}
        name="StackNavigator"
        component={StackNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="balloon-outline" color={color} />
          ),
        }}
        name="Tabs"
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="bulb-outline" color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: colors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
