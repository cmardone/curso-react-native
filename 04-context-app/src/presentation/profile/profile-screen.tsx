import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../config/app-theme';
import {useProfileStore} from '../store/profile-store';

const ProfileScreen = () => {
  const {name, email, changeProfile} = useProfileStore(state => state);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Cristóbal Mardones Bucarey', email)}>
        <Text>Change name</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'cmardone@gmail.com'})}>
        <Text>Change email</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('John Doe', 'john.doe@gmail.com')}>
        <Text>Reset values</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
