import { Stack } from 'expo-router/stack';
import { StatusBar } from 'react-native';

StatusBar.setBackgroundColor('#a1a1a1');

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{headerShown:false}}/>
    </Stack>
  );
}