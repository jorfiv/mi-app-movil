import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { theme } from '../styles/theme';

const PRODUCTS = [
  { id: '1', name: 'Producto A - $10' },
  { id: '2', name: 'Producto B - $20' },
  { id: '3', name: 'Producto C - $30' },
];

export const DashboardScreen = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>
      <Text style={styles.subtitle}>Ítems en carrito: {cartCount}</Text>
      
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.product} 
            onPress={() => setCartCount(cartCount + 1)}
          >
            <Text style={styles.productText}>{item.name}</Text>
            <Text style={styles.addButton}>+ Agregar</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.large,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.small,
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.primary,
    marginBottom: theme.spacing.medium,
  },
  product: {
    padding: theme.spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productText: { fontSize: 16 },
  addButton: { color: theme.colors.primary, fontWeight: 'bold' },
});
