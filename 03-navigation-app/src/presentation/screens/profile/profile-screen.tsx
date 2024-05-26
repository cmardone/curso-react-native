import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PrimaryButton from '../../components/shared/primary-button';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top,
      }}>
      <Text style={{ marginBottom: 10 }}>ProfileScreen</Text>
      <PrimaryButton
        onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
        label="Open drawer"
      />
    </View>
  );
};

export default ProfileScreen;
