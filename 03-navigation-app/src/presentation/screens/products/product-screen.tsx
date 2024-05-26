import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../routes/stack-navigator';
import { globalStyles } from '../../themes/theme';

const ProductScreen = () => {
  const navigation = useNavigation();
  const { name } = useRoute<RouteProp<RootStackParamList, 'Product'>>().params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export default ProductScreen;
