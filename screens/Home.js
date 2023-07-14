import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/images/Pictionary.png")}
          resizeMode="contain"
        ></Image>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPressOut={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#24ded3",
  },
  logo: {
    aspectRatio: 1,
    borderRadius: 10,
    resizeMode: "stretch",
    width: 500,
    height: 500,
    flexDirection: "column",
    marginTop: 0,
  },
  button: {
    backgroundColor: "#24ded3",
    alignSelf: "center",
    borderRadius: 20,
    width: 250,
    height: 80,
    paddingVertical: "3.5%",
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
