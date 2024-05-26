import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../../components/shared/primary-button';
import { RootStackParamList } from '../../routes/stack-navigator';
import { globalStyles } from '../../themes/theme';

// Create a list of products with id and name
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
  { id: 7, name: 'Product 7' },
  { id: 8, name: 'Product 8' },
  { id: 9, name: 'Product 9' },
];

const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product', item)}
            label={item.name}
          />
        )}
      />
      <Text style={styles.title}>Settings</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Settings"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductsScreen;
