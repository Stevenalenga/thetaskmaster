import React from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default function MyScreen() {
  return (
    <View>
      <SearchBar
        placeholder="Search"
        round
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        searchIcon={<Ionicons name="search" size={20} color="gray" />}
      />
    </View>
  );
}

const styles = {
  searchBarContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    paddingBottom: 0,
    paddingTop: 0,
  },
  searchBarInputContainer: {
    backgroundColor: "#e8e8e8",
    borderRadius: 20,
    height: 40,
  },
};
