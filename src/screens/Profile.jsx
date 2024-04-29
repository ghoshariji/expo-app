import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
// import { db } from "../../firebase.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import COLORS from "../constants/colors.js";

const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const firestore = getFirestore();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const uid = await AsyncStorage.getItem("uid");
  //     if (uid) {
  //       const userCol = collection(firestore, "users");
  //       const userQuery = query(userCol, where("uid", "==", uid));

  //       try {
  //         const userQuerySnapshot = await getDocs(userQuery);
  //         userQuerySnapshot.forEach((doc) => {
  //           setUser(doc.data());
  //         });
  //       } catch (error) {
  //         console.error("Error getting user:", error);
  //       }
  //     }
  //     else{
  //       navigation.navigate("Login");
  //     }
  //   };

  //   fetchUser();
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     // Clear AsyncStorage
  //     await AsyncStorage.removeItem("uid");
  //     // Navigate to login screen or any other appropriate screen
  //     navigation.navigate("Login");
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //   }
  // };

  return (
    <></>
    // <View style={styles.container}>
    //   <Text style={styles.heading}>Profile</Text>
    //   {user && (
    //     <View style={styles.profileInfo}>
    //       <Image source={{ uri: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" }} style={styles.profilePic} />
    //       <Text style={styles.profileText}>Name: {user.name}</Text>
    //       <Text style={styles.profileText}>Email: {user.email}</Text>
    //       <Text style={styles.profileText}>Phone: {user.phone}</Text>
    //     </View>
    //   )}
    //   <Button title="Logout" onPress={handleLogout} />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.black,
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 5,
    color: COLORS.black,
  },
});

export default Profile;
