import React from 'react';
import { View } from 'react-native';
import HamburgerMenu from '../../components/shared/hamburger-menu';
import { TopTabNavigator } from '../../routes/top-tab-navigator';

const Tab2Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <TopTabNavigator />
    </View>
  );
};

export default Tab2Screen;
