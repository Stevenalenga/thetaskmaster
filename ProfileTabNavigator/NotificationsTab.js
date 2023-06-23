import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewNotifications from "../SCREENS/NewNotifications";
import OldNotifications from "../SCREENS/OldNotifications";

const Tab = createMaterialTopTabNavigator();

function ProfileTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Edit Profile" component={NewNotifications} />
      <Tab.Screen name="Settings" component={OldNotifications} />
    </Tab.Navigator>
  );
}

export default ProfileTabNavigator;
