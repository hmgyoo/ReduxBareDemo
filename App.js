import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './src/features/fakestore/fakeStore';
import React, { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.fakeStore.loading);
  const products = useSelector(state => state.fakeStore.entities);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading === 'pending' && <Text style={{ color: '#000', fontSize: 20 }}>Loading...</Text>}
      {loading === 'succeeded' && (
        <View style={styles.productsContainer}>
          {products.map(product => (
            <View key={product.id} style={styles.product}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>{product.price}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <Text style={styles.category}>{product.category}</Text>
              <Image source={{ uri: product.image }} style={styles.image} />
            </View>
          ))}
        </View>
      )}
      {loading === 'failed' && <Text>Error occurred while loading data</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productsContainer: {
    alignItems: 'center',
  },
  product: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  description: {
    marginBottom: 5,
    color: '#000',
  },
  category: {
    fontStyle: 'italic',
    marginBottom: 5,
    color: '#000',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default App;
