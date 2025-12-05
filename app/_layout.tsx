// app/_layout.js
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,   // 🔥 Oculta TODOS los headers globalmente
      }}
    >
      {/* AuthLoader se usa como pantalla inicial */}
      <Stack.Screen 
        name="authLoader" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}
