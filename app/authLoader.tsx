import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function AuthLoader() {
  useEffect(() => {
    const checkSession = async () => {
      const user = await AsyncStorage.getItem("user");

      if (user) {
        router.replace("/(tabs)/inicio"); 
      } else {
        router.replace("/login"); 
      }
    };

    checkSession();
  }, []);

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
