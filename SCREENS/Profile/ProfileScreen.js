import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

function MyProfileScreen() {
  const progressData = {
    completed: 0.6, // 80%
    inProgress: 0.2, // 50%
    suspended: 0.7, // 30%
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>

      {/* Completed Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.label}>Completed</Text>
        <View style={styles.progressBarWrapper}>
          <ProgressBar 
            progress={progressData.completed} 
            color="red" 
            style={styles.progressBar} 
          />
          <Text style={styles.percentage}>
            {Math.round(progressData.completed * 100)}%
          </Text>
        </View>
      </View>

      {/* In Progress Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.label}>In Progress</Text>
        <View style={styles.progressBarWrapper}>
          <ProgressBar 
            progress={progressData.inProgress} 
            color="red" 
            style={styles.progressBar} 
          />
          <Text style={styles.percentage}>
            {Math.round(progressData.inProgress * 100)}%
          </Text>
        </View>
      </View>

      {/* Suspended Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.label}>Suspended</Text>
        <View style={styles.progressBarWrapper}>
          <ProgressBar 
            progress={progressData.suspended} 
            color="red" 
            style={styles.progressBar} 
          />
          <Text style={styles.percentage}>
            {Math.round(progressData.suspended * 100)}%
          </Text>
        </View>
      </View>
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

function CompletedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={() => navigation.navigate("Logout")}
      >
        <Icon name="power-outline" size={40} color="red" /> 
      </TouchableOpacity>
    </View>
  );
}




function ProfileScreen({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen name="MyProfile" component={MyProfileScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="TasksPending" component={TasksScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  progressContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "600",
  },
  progressBarWrapper: {
    position: "relative",
    width: "100%",
  },
  progressBar: {
    height: 20, // Increased height for better visibility
    borderRadius: 10,
    backgroundColor: "blue", // Set the background color to red
  },
  percentage: {
    position: "absolute",
    left: "50%",
    top: 0,
    transform: [{ translateX: -50 }],
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    lineHeight: 20, // Center the text vertically
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50, // Optional: to make it look circular
    padding: 10,
  },
});

export default ProfileScreen;
