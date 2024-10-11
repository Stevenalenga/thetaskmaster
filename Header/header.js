import React from 'react'
import {View, Text,Image} from "react-native"
import styles from "../Styles/MainTabstyles"


const Header = ()=>{
    return(
        <View style={styles.headerContainer}>
              <Image
                source={{ uri: "https://picsum.photos/200" }}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.username}>Username</Text>
                <Text style={styles.userId}>User ID: 12345</Text>
              </View>
            </View>
    )
}

export default Header;