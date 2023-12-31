import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "darkgreen" }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="userInfo"
        options={{
          title: "User Info",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
