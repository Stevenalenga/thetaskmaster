import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import styles from "../../Styles/Loginstyles";



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = (text) => {
    // Simplified email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    setEmail(text);
    setCheckValidEmail(!emailRegex.test(text));
  };

  const checkPasswordValidity = (value) => {
    const passwordChecks = [
      { regex: /\s/, message: "Password must not contain whitespaces." },
      { regex: /[A-Z]/, message: "Password must have at least one uppercase character." },
      { regex: /[a-z]/, message: "Password must have at least one lowercase character." },
      { regex: /\d/, message: "Password must contain at least one digit." },
      { regex: /^.{8,}$/, message: "Password must be at least 8 characters long." }
    ];

    for (const check of passwordChecks) {
      if (check.regex.test(value) !== (check.regex.source === /\s/.source)) {
        return check.message;
      }
    }

    return null;
  };

  const handleLogin = async () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {

      alert("Login Successful");
          navigation.replace("Home");
    }
  }
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Fidaac.png")} style={styles.image}/>
      <View style={styles.wrapperInput}>
      
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleCheckEmail}
        />
      </View>
      {checkValidEmail && <Text style={styles.textFailed}>Wrong format email</Text>}
      
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}
        >
          <Text>{seePassword ? "Show" : "Hide"}</Text>
        </TouchableOpacity>
      </View>
      
      {(email === "" || password === "" || checkValidEmail) ? (
        <TouchableOpacity disabled style={styles.buttonDisable} onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      )
      
      }
      <View style={styles.signupText}>
        <Text>Not signed up? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

