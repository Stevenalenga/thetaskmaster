import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EditProfileScreen from "../SCREENS/EditProfileScreen";
import SettingsScreen from "../SCREENS/SettingsScreen";
import LogoutScreen from "../SCREENS/LogoutScreen";

const Tab = createMaterialTopTabNavigator();

function ProfileTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Edit Profile" component={EditProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

export default ProfileTabNavigator;
