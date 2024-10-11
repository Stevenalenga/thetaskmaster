import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../../Styles/Logoutstyles";

const LogoutScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Here you can clear any authentication tokens or user data if needed

    // Redirect to the Login screen
    navigation.replace("Login"); // Replace ensures the user cannot go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to log out?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={handleLogout} color="red" />
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};



export default LogoutScreen;
