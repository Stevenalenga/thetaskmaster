import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EditProfileScreen from "../SCREENS/Profile/EditProfileScreen";
import SettingsScreen from "../SCREENS/Settings/SettingsScreen";
import LogoutScreen from "../SCREENS/Logout/LogoutScreen";

const Tab = createMaterialTopTabNavigator();

function ProfileTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Edit_Profile" component={EditProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

export default ProfileTabNavigator;
