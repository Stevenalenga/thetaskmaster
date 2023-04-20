import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
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

function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
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
      <Text>HomeScreen</Text>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "ios-home";
            } else if (route.name === "Profile") {
              iconName = "ios-person";
            } else if (route.name === "Notifications") {
              iconName = "ios-notifications";
            } else if (route.name === "Search") {
              iconName = "ios-search";
            } else if (route.name === "Messages") {
              iconName = "ios-mail";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
        <Tabs.Screen name="Notifications" component={NotificationsScreen} />
        <Tabs.Screen name="Search" component={SearchScreen} />
        <Tabs.Screen name="Messages" component={MessagesScreen} />
      </Tabs.Navigator>
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
