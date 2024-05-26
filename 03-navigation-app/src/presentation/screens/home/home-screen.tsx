import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import HamburgerMenu from '../../components/shared/hamburger-menu';
import PrimaryButton from '../../components/shared/primary-button';
import { RootStackParamList } from '../../routes/stack-navigator';
import { globalStyles } from '../../themes/theme';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <HamburgerMenu />
      <View style={globalStyles.container}>
        <PrimaryButton
          label="Products"
          onPress={() => navigation.navigate('Products' as never)}
        />
        <PrimaryButton
          label="Settings"
          onPress={() => navigation.navigate('Settings' as never)}
        />
      </View>
    </>
  );
};

export default HomeScreen;
