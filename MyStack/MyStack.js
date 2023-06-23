import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationsScreen from "../SCREENS/NotificationsScreen";
import MessagesScreen from "../SCREENS/MessagesScreen";
import ProfileScreen from "../SCREENS/ProfileScreen";
import LoginScreen from "../SCREENS/LoginScreen";
import RegisterScreen from "../SCREENS/RegisterScreen";
import SettingsScreen from "../SCREENS/SettingsScreen";
import MainTabNavigator from "../ProfileTabNavigator/MainTabNavigator";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={MainTabNavigator} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
