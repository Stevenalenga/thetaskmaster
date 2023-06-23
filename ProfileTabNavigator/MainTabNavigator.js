import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import ProfileScreen from "../SCREENS/ProfileScreen";
import NotificationsScreen from "../SCREENS/NotificationsScreen";
import SearchScreen from "../SCREENS/SearchScreen";
import MessagesScreen from "../SCREENS/MessagesScreen";
import HomeScreen from "../SCREENS/HomeScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "notifications") {
            iconName = focused ? "bell" : "bell";
          } else if (route.name === "messages") {
            iconName = focused ? "envelope" : "envelope";
          } else if (route.name === "profile") {
            iconName = focused ? "user-circle" : "user-circle";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="search" component={SearchScreen} />
      <Tab.Screen name="notifications" component={NotificationsScreen} />
      <Tab.Screen name="messages" component={MessagesScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
