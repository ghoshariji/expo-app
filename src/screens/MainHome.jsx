import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
// import { db } from "../../firebase.js";
import COLORS from "../constants/colors.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons';

const MainHome = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0); // Assuming balance is fetched from somewhere
  const [profit, setProfit] = useState(0); // Assuming profit is fetched from somewhere
  const [activeOrders, setActiveOrders] = useState([]); // Assuming active orders are fetched from somewhere

  const firestore = getFirestore();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const uid = await AsyncStorage.getItem("uid");
  //     if(uid){
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

  return (
    <></>
    // <View style={styles.container}>
    //   <Text style={styles.heading}>Welcome, {user?.name}</Text>
      
    //   {/* Binance Wallet Balance */}
    //   <View style={styles.card}>
    //     <Ionicons name="wallet-outline" size={24} color={COLORS.black} />
    //     <Text style={styles.cardText}>Binance Wallet Balance</Text>
    //     <Text style={styles.cardText}>{balance}</Text>
    //   </View>
      
    //   {/* Today's Profit */}
    //   <View style={styles.card}>
    //     <Ionicons name="stats-chart-outline" size={24} color={COLORS.black} />
    //     <Text style={styles.cardText}>Today's Profit</Text>
    //     <Text style={styles.cardText}>{profit}</Text>
    //   </View>
      
    //   {/* Active Trade Orders */}
    //   <View style={styles.card}>
    //     <Ionicons name="analytics-outline" size={24} color={COLORS.black} />
    //     <Text style={styles.cardText}>Active Trade Orders</Text>
    //     {activeOrders.map((order, index) => (
    //       <View key={index} style={styles.order}>
    //         <Text>Pair: {order.pair}</Text>
    //         <Text>Order ID: {order.orderId}</Text>
    //         <Text>Order Date: {order.orderDate}</Text>
    //       </View>
    //     ))}
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    marginLeft: 10,
  },
  order: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 10,
    padding: 10,
  },
});

export default MainHome;
