import React from 'react';
import { View, FlatList} from 'react-native';
import MessageBox from './MessageBox';
import styles from "../../Styles/Messagestyles";


const messages = [
  {
    id: '1',
    profilePicture: 'https://picsum.photos/200',
    name: 'John Doe',
    messagePreview: 'Hey, how are you?',
  },
  {
    id: '2',
    profilePicture: 'https://picsum.photos/300',
    name: 'Jane Smith',
    messagePreview: 'Are we still on for tomorrow?',
  },
  // Add more messages here
];

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={messages}
        renderItem={({ item }) => <MessageBox contact={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};



export default MessagesScreen;
