//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import questions from "../components/Questions";

// create a component
const Result = ({ navigation, route }) => {
  const { Score } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Result</Text>
      <Image
        style={styles.logo}
        source={require("../assets/images/Result.png")}
        resizeMode="contain"
      ></Image>
      <Text style={styles.score}>
        Your Score is : {Score}/{questions.length}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#24ded3",
    flexDirection: "column",
  },
  logo: {
    aspectRatio: 1,
    borderRadius: 10,
    resizeMode: "stretch",
    width: 500,
    height: 400,
    flexDirection: "column",
    marginTop: 0,
  },
  heading: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  score: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1da1a6",
    alignSelf: "center",
    borderRadius: 20,
    width: 200,
    height: 70,
    paddingVertical: "3.5%",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    aspectRatio: 1,
    borderRadius: 10,
    resizeMode: "contain",
    width: 300,
    height: 300,
    flexDirection: "column",
  },
});

//make this component available to the app
export default Result;
