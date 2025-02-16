import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.background,
        tabBarInactiveTintColor: Colors.dark.icon,
        tabBarItemStyle: {
          marginHorizontal: 40,
          marginVertical: 10,
        },
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          height: 72,
          bottom: 20,
          overflow: "hidden",
          borderRadius: 12,
          marginHorizontal: 20,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="hobby"
        options={{
          title: "Hobby",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="games" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
