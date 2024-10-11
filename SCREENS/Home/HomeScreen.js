import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text,Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import styles from "../../Styles/Homestyles";

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      
      <MapView
        style={styles.map}
        region={{
          latitude: location ? location.latitude : -1.286389,
          longitude: location ? location.longitude : 36.817223,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true} // Show user's location on the map
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="My Location"
            description="This is where you are"
          >
            <View style={styles.markerContainer}>
              <Image
                source={{ uri: "https://picsum.photos/200" }}
                style={styles.markerImage}
              />
            </View>
          </Marker>
        )}
      </MapView>
      
    </View>
  );
};



export default HomeScreen;
