import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../SCREENS/Login/LoginScreen";
import RegisterScreen from "../SCREENS/Register/RegisterScreen";
import MainTabNavigator from "../MainTab/MainTabNavigator"; // Ensure this contains your Home tab
import LogoutScreen from "../SCREENS/Logout/LogoutScreen";
import MessagesWindow from "../SCREENS/Messages/Messageswindow";
import Header from "../Header/header";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name = "Logout" component={LogoutScreen}/>
      {/* Use MainTabNavigator directly here */}
      <Stack.Screen 
        name="Home" 
        component={MainTabNavigator} 
        options={{ headerShown: false }} // Hide header if MainTabNavigator has its own navigation
      />
     <Stack.Screen name = "MessagesWindow" options={{
          headerTitle: () => (
            <Header/>
          ),
        }} component={MessagesWindow}/>
      
    </Stack.Navigator>
  );
}



export default MyStack;
