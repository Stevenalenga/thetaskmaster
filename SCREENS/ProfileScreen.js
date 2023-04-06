import * as React from "react";
import { View, Text } from "react-native";
import ProfileTabNavigator from "../ProfileTabNavigator/ProfileTabNavigator";

function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
      <ProfileTabNavigator />
    </View>
  );
}

export default ProfileScreen;
