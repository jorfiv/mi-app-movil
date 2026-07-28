import React from 'react';
import { useRouter } from 'expo-router';
import { useCart } from '../context/CartContext';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
      <View style={styles.header}>
        <Text style={styles.title}>Catálogo</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/cart')}>
          <Ionicons name="cart-outline" size={28} color={theme.colors.text} />
          {totalItems > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{totalItems}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      
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
                <Text style={styles.productText}>{item.name}</Text>
                <Text style={styles.price}>${item.price.toLocaleString('es-CL')}</Text>
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
        onPress={() => alert('Gracias por comprar con nosotros')}
      >
        <Text style={styles.buttonText}>Proceder al Pago</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: theme.spacing.large, paddingTop: 50, backgroundColor: theme.colors.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text },
  cartButton: { position: 'relative' },
  badge: { position: 'absolute', right: -6, top: -6, backgroundColor: theme.colors.accent, borderRadius: 10, width: 20, height: 20, alignItems: 'center', justifyContent: 'center' },
  badgeText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  product: { padding: theme.spacing.medium, borderBottomWidth: 1, borderBottomColor: '#ddd', flexDirection: 'row', alignItems: 'center' },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: theme.spacing.medium },
  info: { flex: 1 },
  productText: { fontSize: 16, fontWeight: 'bold', color: theme.colors.text },
  price: { color: '#555', marginVertical: 4 },
  controls: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  controlButton: { backgroundColor: theme.colors.primary, padding: 8, borderRadius: 5, width: 30, alignItems: 'center' },
  controlButtonText: { color: 'white', fontWeight: 'bold' },
  quantity: { marginHorizontal: 15, fontSize: 16, fontWeight: 'bold', color: theme.colors.text },
  paymentButton: { backgroundColor: theme.colors.primary, padding: theme.spacing.medium, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
