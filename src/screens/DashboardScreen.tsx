import React from 'react';
import { useRouter } from 'expo-router';
import { useCart } from '../context/CartContext';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { theme } from '../styles/theme';

const PRODUCTS = [
  { id: '1', name: 'Lenovo IdeaPad Slim 3', price: 450000, image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&auto=format&fit=crop' },
  { id: '2', name: 'ASUS Vivobook', price: 600000, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&auto=format&fit=crop' },
  { id: '3', name: 'HP Pavilion', price: 850000, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&auto=format&fit=crop' },
];

export const DashboardScreen = () => {
  const router = useRouter();
  const { cart, totalItems, addToCart, removeFromCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Notebooks</Text>
      <TouchableOpacity onPress={() => router.push('/cart')}>
        <Text style={styles.subtitle}>Ver Carrito ({totalItems} ítems)</Text>
      </TouchableOpacity>
      
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const cartItem = cart.find(c => c.product.id === item.id);
          const quantity = cartItem ? cartItem.quantity : 0;
          return (
            <View style={styles.product}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.productText}>{item.name} - ${item.price.toLocaleString('es-CL')}</Text>
                <View style={styles.controls}>
                  <TouchableOpacity style={styles.controlButton} onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.controlButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{quantity}</Text>
                  <TouchableOpacity style={styles.controlButton} onPress={() => addToCart(item)}>
                    <Text style={styles.controlButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity 
        style={styles.paymentButton} 
        onPress={() => Alert.alert('Pago', 'Gracias por comprar con nosotros')}
      >
        <Text style={styles.buttonText}>Proceder al Pago</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: theme.spacing.large, backgroundColor: theme.colors.background },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: theme.spacing.small },
  subtitle: { fontSize: 18, color: theme.colors.primary, marginBottom: theme.spacing.medium },
  product: { padding: theme.spacing.medium, borderBottomWidth: 1, borderBottomColor: '#eee', flexDirection: 'row', alignItems: 'center' },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: theme.spacing.medium },
  info: { flex: 1 },
  productText: { fontSize: 16, fontWeight: 'bold' },
  controls: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  controlButton: { backgroundColor: theme.colors.primary, padding: 8, borderRadius: 5, width: 30, alignItems: 'center' },
  controlButtonText: { color: 'white', fontWeight: 'bold' },
  quantity: { marginHorizontal: 15, fontSize: 16, fontWeight: 'bold' },
  paymentButton: { backgroundColor: 'green', padding: theme.spacing.medium, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
