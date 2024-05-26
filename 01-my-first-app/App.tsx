import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HomeWorkScreen from './src/presentation/screen/home-work-screen';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <HomeWorkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
