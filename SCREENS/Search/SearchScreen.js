
import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MAX_SEARCHES = 5;

export default function MyScreen() {
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // Load recent searches from AsyncStorage when the component mounts
    const loadRecentSearches = async () => {
      const savedSearches = await AsyncStorage.getItem("recentSearches");
      if (savedSearches) {
        setRecentSearches(JSON.parse(savedSearches));
      }
    };

    loadRecentSearches();
  }, []);

  const updateSearch = (text) => {
    setSearch(text);
  };

  const handleSearch = async () => {
    if (search.trim() === "") return;

    // Update recent searches
    const updatedSearches = [search, ...recentSearches]
      .slice(0, MAX_SEARCHES) // Keep only the latest 5 searches
      .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

    setRecentSearches(updatedSearches);
    await AsyncStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    
    setSearch(""); // Clear the search input
  };

  const handleRecentSearch = (item) => {
    setSearch(item); // Set the search input to the selected recent search
  };

  return (
    <View>
      <SearchBar
        placeholder="Search"
        round
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        searchIcon={<Ionicons name="search" size={20} color="gray" />}
        onChangeText={updateSearch}
        value={search}
        onSubmitEditing={handleSearch} // Trigger handleSearch on submit
      />
      {recentSearches.length > 0 && (
        <FlatList
          data={recentSearches}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRecentSearch(item)}>
              <Text style={styles.recentSearchItem}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
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
  recentSearchItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
};




