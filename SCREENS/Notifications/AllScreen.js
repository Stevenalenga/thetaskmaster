import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import styles from "../../Styles/Notificationstyles";

function AllScreen() {
  const notifications = [
    {
      id: 1,
      userImage: "https://picsum.photos/50",
      title: "New Message",
      description: "You have a new message from John",
    },
    {
      id: 2,
      userImage: "https://picsum.photos/51",
      title: "Friend Request",
      description: "Anna sent you a friend request",
    },
    {
      id: 3,
      userImage: "https://picsum.photos/52",
      title: "Like",
      description: "Tom liked your post",
    },
  ];

  const handleNotificationClick = (notification) => {
    Alert.alert(notification.title, notification.description);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      {notifications.map((notification) => (
        <TouchableOpacity
          key={notification.id}
          style={styles.notificationItem}
          onPress={() => handleNotificationClick(notification)}
        >
          <Image source={{ uri: notification.userImage }} style={styles.userImage} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{notification.title}</Text>
            <Text style={styles.description}>{notification.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default AllScreen;
