import React from 'react';
import { useRouter } from 'expo-router';
import { useCart } from '../context/CartContext';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { theme } from '../styles/theme';

const PRODUCTS = [
  { id: '1', name: 'Producto A', price: 10 },
  { id: '2', name: 'Producto B', price: 20 },
  { id: '3', name: 'Producto C', price: 30 },
];

export const DashboardScreen = () => {
  const router = useRouter();
  const { cart, totalItems, addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>
      <TouchableOpacity onPress={() => router.push('/cart')}>
        <Text style={styles.subtitle}>Ver Carrito ({totalItems} ítems)</Text>
      </TouchableOpacity>
      
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.productText}>{item.name} - ${item.price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Text style={styles.addButtonText}>+ Agregar</Text>
            </TouchableOpacity>
          </View>
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
    alignItems: 'center',
  },
  productText: { fontSize: 16 },
  addButton: { padding: 8, backgroundColor: theme.colors.primary, borderRadius: 5 },
  addButtonText: { color: 'white', fontWeight: 'bold' },
});
