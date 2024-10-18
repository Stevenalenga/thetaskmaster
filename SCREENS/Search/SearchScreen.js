import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, Alert } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MAX_SEARCHES = 5;

export default function MyScreen() {
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    loadRecentSearches();
  }, []);

  const loadRecentSearches = async () => {
    const savedSearches = await AsyncStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  };

  const updateSearch = (text) => {
    setSearch(text);
  };

  const handleSearch = async () => {
    if (search.trim() === "") return;

    const updatedSearches = [search, ...recentSearches]
      .slice(0, MAX_SEARCHES)
      .filter((value, index, self) => self.indexOf(value) === index);

    setRecentSearches(updatedSearches);
    await AsyncStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    
    setSearch("");
  };

  const handleRecentSearch = (item) => {
    setSearch(item);
  };

  const clearSearchHistory = async () => {
    Alert.alert(
      "Clear Search History",
      "Are you sure you want to clear your search history?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Clear",
          onPress: async () => {
            await AsyncStorage.removeItem("recentSearches");
            setRecentSearches([]);
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        round
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        searchIcon={<Ionicons name="search" size={20} color="gray" />}
        onChangeText={updateSearch}
        value={search}
        onSubmitEditing={handleSearch}
      />
      {recentSearches.length > 0 && (
        <View>
          <View style={styles.recentSearchesHeader}>
            <Text style={styles.recentSearchesTitle}>Recent Searches</Text>
            <TouchableOpacity onPress={clearSearchHistory}>
              <Text style={styles.clearHistoryText}>Clear</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={recentSearches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleRecentSearch(item)}>
                <Text style={styles.recentSearchItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
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
  recentSearchesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  recentSearchesTitle: {
    fontWeight: 'bold',
  },
  clearHistoryText: {
    color: 'blue',
  },
  recentSearchItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
};
