import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
      },
      messagesList: {
        flex: 1,
        padding: 10,
      },
      messageContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        maxWidth: "80%",
      },
      sender: {
        alignSelf: "flex-end",
        backgroundColor: "#DCF8C6",
        borderTopRightRadius: 0,
      },
      receiver: {
        alignSelf: "flex-start",
        backgroundColor: "#E5E5EA",
        borderTopLeftRadius: 0,
      },
      profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
      },
      textContainer: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 10,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 1,
      },
      messageText: {
        fontSize: 16,
      },
      userId: {
        fontSize: 12,
        color: "gray",
        marginTop: 2,
        textAlign: "right",
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderTopWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "white",
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 10,
      },
      iconButton: {
        paddingHorizontal: 10,
      
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      padding: 10,
    },
    messageBox: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
      },
      profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      textContainer: {
        marginLeft: 10,
        justifyContent: 'center',
      },
      contactName: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      messagePreview: {
        color: '#888',
        fontSize: 14,
      },
    
    
  });
  

  export default styles;