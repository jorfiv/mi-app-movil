import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../context/CartContext';
import { theme } from '../styles/theme';

export const CartScreen = () => {
  const { cart, total } = useCart();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Carrito</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.product.name} x{item.quantity}</Text>
            <Text>${item.product.price * item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${total}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Volver al Catálogo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Pago', 'Procesando pago...')}>
          <Text style={styles.buttonText}>Proceder al Pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: theme.spacing.large },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: theme.spacing.medium },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: theme.spacing.medium },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: theme.spacing.large, textAlign: 'right' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  button: { backgroundColor: theme.colors.primary, padding: theme.spacing.medium, borderRadius: 8, flex: 1, alignItems: 'center', marginHorizontal: 5 },
  backButton: { backgroundColor: '#888' },
  buttonText: { color: theme.colors.white, fontWeight: 'bold' },
});
