import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View,StyleSheet } from "react-native";



export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");  // Contact is your phone number field
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // To track API call status

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    setEmail(text);
    setCheckValidEmail(!re.test(text));
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    const isValidLength = /^.{8,}$/;
    if (!isValidLength.test(value)) {
      return "Password must be 8-16 Characters Long.";
    }

    return null;
  };

  const handleSignUp = async () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
    
          alert("Login Successful");
              navigation.replace("Home");
    } else {
      alert(checkPassword);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => handleCheckEmail(text)}
        />
      </View>
      {checkValidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={contact}  // Use the contact field for phone number
          onChangeText={(text) => setContact(text)}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}
        >
          <Text>Show/Hide</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          secureTextEntry={seePassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}
        >
          <Text>Show/Hide</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Text>Signing up...</Text>
      ) : username === "" || email === "" || contact === "" || password === "" || checkValidEmail ? (
        <TouchableOpacity
          disabled
          style={styles.buttonDisable}
          onPress={handleSignUp}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

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
  },
  buttonDisable: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: "white",
    fontWeight: "700",

  },
  textFailed: {
    alignSelf: "flex-end",
    color: "red",
  },
},
)