import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../Styles/Messagestyles";

const MessagesWindow = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello!", sender: true },
    { id: "2", text: "Hi, how are you?", sender: false },
    { id: "3", text: "I'm doing great! How about you?", sender: true },
    { id: "4", text: "Pretty good, thanks for asking. What have you been up to lately?", sender: false },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    setMessages([...messages, { id: Date.now().toString(), text: inputText, sender: true }]);
    setInputText("");
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender ? styles.sender : styles.receiver]}>
      <View style={styles.textContainer}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.userId}>{item.sender ? "Me" : "User1234"}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messagesList}
        contentContainerStyle={styles.messagesListContent}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="add-circle-outline" size={30} color="gray" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        <TouchableOpacity style={styles.iconButton} onPress={handleSendMessage}>
          <Icon name="send" size={30} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagesWindow;
