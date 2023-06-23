import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "./SettingsScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function MyProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User Profile</Text>
    </View>
  );
}

function TasksScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pending Tasks</Text>
    </View>
  );
}

function CompletedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Completed</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "gray",
        indicatorStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen name="Profile" component={MyProfileScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="TasksPending" component={TasksScreen} />
    </Tab.Navigator>
  );
}
export default ProfileScreen;
