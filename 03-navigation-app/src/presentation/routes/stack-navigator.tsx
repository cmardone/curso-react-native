import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import HomeScreen from '../screens/home/home-screen';
import ProductScreen from '../screens/products/product-screen';
import ProductsScreen from '../screens/products/products-screen';
import SettingsScreen from '../screens/settings/settings-screen';

export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Product: { id: number; name: string };
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </>
  );
};
