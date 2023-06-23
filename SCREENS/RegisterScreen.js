import React, { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SocialIcon } from "react-native-elements";

export default function RegistrationForm({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError(""); // Reset the password error state
      // Handle registration form submission here
      navigation.navigate("Profile");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        style={styles.input}
      />
      <TextInput
        placeholder="Nationality"
        value={nationality}
        onChangeText={setNationality}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <Button title="Sign Up" onPress={handleSubmit} color="#007AFF" />
      <Text>or</Text>
      <TouchableOpacity>
        <SocialIcon
          title="Sign up with Facebook"
          button
          type="facebook"
          style={styles.socialButton}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SocialIcon
          title="Sign up with Google"
          button
          type="google"
          style={styles.socialButton}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  socialButton: {
    marginTop: 10,
  },
});
