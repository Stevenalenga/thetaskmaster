import { AsyncStorage } from "react-native";
import { login } from "./api"; // Import the login function from your API module

// Middleware function to handle login
export const handleLogin = async (username, password) => {
  try {
    const response = await login(username, password); // Make the login request

    if (response.status === 200) {
      const { access_token } = response.data; // Extract the access_token from the response
      await AsyncStorage.setItem("access_token", access_token);
      return { success: true };
    } else {
      return { success: false, error: "Incorrect email or password" };
    }
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
};
