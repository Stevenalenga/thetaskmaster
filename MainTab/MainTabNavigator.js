import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import ProfileScreen from "../SCREENS/Profile/ProfileScreen";
import NotificationsScreen from "../SCREENS/Notifications/NotificationsScreen";
import SearchScreen from "../SCREENS/Search/SearchScreen";
import MessagesScreen from "../SCREENS/Messages/MessagesScreen";
import HomeScreen from "../SCREENS/Home/HomeScreen";

import Header from "../Header/header";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Define icon names based on the route name
          switch (route.name) {
            case "Main": // Changed to capitalized name
              iconName = "home";
              break;
            case "Search":
              iconName = "search";
              break;
            case "Notifications":
              iconName = "bell";
              break;
            case "Messages":
              iconName = "envelope";
              break;
            case "Profile":
              iconName = "user-circle";
              break;
            default:
              iconName = "home"; // Fallback icon
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          backgroundColor: "black",
        },
      })}
    >
      <Tab.Screen name="Main" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen
        name="Profile"
        options={{
          headerTitle: () => (
           <Header/>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};



export default MainTabNavigator;
