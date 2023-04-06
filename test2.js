import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function ProfileTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Edit Profile" component={EditProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

function RegisterScreen() {
  return (
    <View>
      <Text>Register Screen</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function MessagesScreen() {
  return (
    <View>
      <Text>Messages Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
      <ProfileTabNavigator />
    </View>
  );
}

function EditProfileScreen() {
  return (
    <View>
      <Text>Edit Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

function LogoutScreen() {
  return (
    <View>
      <Text>Logout Screen</Text>
    </View>
  );
}
