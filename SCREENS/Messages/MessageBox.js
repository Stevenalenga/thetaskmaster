import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../../Styles/Messagestyles";

const MessageBox = ({ contact }) => {
  const navigation = useNavigation();

  const openMessage = () => {
    navigation.navigate('MessagesWindow', { contact });
    console.log(`Opening messages for ${contact.name}`);
  };

  return (
    <TouchableOpacity style={styles.messageBox} onPress={openMessage}>
      <Image source={{ uri: contact.profilePicture }} style={styles.profilePicture} />
      <View style={styles.textContainer}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text style={styles.messagePreview}>{contact.messagePreview}</Text>
      </View>
    </TouchableOpacity>
  );
};


  
export default MessageBox;
