
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
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    setCheckValidEmail(!(re.test(text) || regex.test(text)));
  };

  const checkPasswordValidity = (value) => {
    if (!/^\S*$/.test(value)) return "Password must not contain Whitespaces.";
    if (!/^(?=.*[A-Z]).*$/.test(value)) return "Password must have at least one Uppercase Character.";
    if (!/^(?=.*[a-z]).*$/.test(value)) return "Password must have at least one Lowercase Character.";
    if (!/^(?=.*[0-9]).*$/.test(value)) return "Password must contain at least one Digit.";
    if (!/^.{8,}$/.test(value)) return "Password must be at least 8 Characters Long.";
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


