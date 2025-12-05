import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,  
        tabBarActiveTintColor: "#0a7ea4",
      }}
    >
      <Tabs.Screen
        name="inicio"
        options={{
          headerShown: false, 
          title: "",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="configuracion"
        options={{
          headerShown: false, 
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} {...props} style={{ marginBottom: -3 }} />;
}
