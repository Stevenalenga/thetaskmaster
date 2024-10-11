import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      marginHorizontal: 20,
    },
    wrapperInput: {
      borderWidth: 0.5,
      borderRadius: 5,
      borderColor: "grey",
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      padding: 10,
      width: "100%",
    },
    wrapperIcon: {
      position: "absolute",
      right: 0,
      padding: 10,
    },
    button: {
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "orange",
      borderRadius: 5,
      marginTop: 25,
      width: "100%",  // Ensures button width fills the container
    },
    buttonDisable: {
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "grey",
      borderRadius: 5,
      marginTop: 25,
      width: "100%",  // Ensures button width fills the container
    },
    text: {
      color: "white",
      fontWeight: "700",
    },
    textFailed: {
      alignSelf: "flex-end",
      color: "red",
    },
    signupLink: {
      padding: 10,
      color: "blue",
    },
    signupText: {
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 200, // Adjust to desired width
      height: 200, // Adjust to desired height
      marginBottom: 20,
      alignSelf: "center",
    }
  });
  

  export default styles;