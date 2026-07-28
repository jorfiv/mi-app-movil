import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../context/CartContext';
import { theme } from '../styles/theme';

export const CartScreen = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Carrito</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.product.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.product.name} x{item.quantity}</Text>
              <Text>${(item.product.price * item.quantity).toLocaleString('es-CL')}</Text>
            </View>
            <View style={styles.controls}>
              <TouchableOpacity style={styles.controlButton} onPress={() => removeFromCart(item.product.id)}>
                <Text style={styles.controlButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity style={styles.controlButton} onPress={() => addToCart(item.product)}>
                <Text style={styles.controlButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${total.toLocaleString('es-CL')}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Pago', 'Gracias por comprar con nosotros')}>
          <Text style={styles.buttonText}>Proceder al Pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: theme.spacing.large },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: theme.spacing.medium },
  item: { flexDirection: 'row', alignItems: 'center', padding: theme.spacing.medium, borderBottomWidth: 1, borderBottomColor: '#eee' },
  image: { width: 50, height: 50, borderRadius: 5, marginRight: theme.spacing.medium },
  info: { flex: 1 },
  name: { fontWeight: 'bold' },
  controls: { flexDirection: 'row', alignItems: 'center' },
  controlButton: { backgroundColor: theme.colors.primary, padding: 8, borderRadius: 5, width: 30, alignItems: 'center' },
  controlButtonText: { color: 'white', fontWeight: 'bold' },
  quantity: { marginHorizontal: 10, fontSize: 16, fontWeight: 'bold' },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: theme.spacing.large, textAlign: 'right' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  button: { backgroundColor: theme.colors.primary, padding: theme.spacing.medium, borderRadius: 8, flex: 1, alignItems: 'center', marginHorizontal: 5 },
  backButton: { backgroundColor: '#888' },
  buttonText: { color: theme.colors.white, fontWeight: 'bold' },
});
