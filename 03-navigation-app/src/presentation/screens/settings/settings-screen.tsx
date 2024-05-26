import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import PrimaryButton from '../../components/shared/primary-button';
import { globalStyles } from '../../themes/theme';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text>SettingsScreen</Text>
      <PrimaryButton
        onPress={() => navigation.dispatch(StackActions.popToTop)}
        label="Go to root"
      />
    </View>
  );
};

export default SettingsScreen;
