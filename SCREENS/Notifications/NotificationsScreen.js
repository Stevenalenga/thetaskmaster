import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllScreen from "./AllScreen";  // Import the AllScreen component

const Tab = createMaterialTopTabNavigator();

function FollowingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Following</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen name="All" component={AllScreen} />
      <Tab.Screen name="Following" component={FollowingScreen} />
    </Tab.Navigator>
  );
}

export default NotificationsScreen;
