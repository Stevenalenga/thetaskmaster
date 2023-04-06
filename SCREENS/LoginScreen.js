import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry={true} />
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
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  register: {
    color: "#0000ff",
    alignSelf: "center",
  },
});

export default LoginScreen;
