import { CartProvider } from '../context/CartContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#E0F2F1' } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="login" />
        <Stack.Screen name="cart" />
      </Stack>
    </CartProvider>
  );
}
