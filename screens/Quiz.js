//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";
import questions from "../components/Questions";
//import AsyncStorage from "@react-native-async-storage/async-storage";

// create a component
const Quiz = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerButtonClick = (selectedAnswer) => {
    let newScore = score;
    if (selectedAnswer === currentQuestion.correctOption) {
      newScore += 1;
      setScore(newScore);
      setAnswers([...answers, true]);
    } else {
      setAnswers([...answers, false]);
    }

    // timeout 1 second
    /* const t =*/ setTimeout(() => {
      if (currentQuestionIndex < 4) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }, 1000);
    // clearTimeout(t);
    setTimeout(() => {
      if (currentQuestionIndex >= 4) {
        navigation.navigate("Result", { Score: newScore });
      }
    }, 1300);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>GUESS THE WORD!</Text>
      <View style={styles.image_frame}>
        <Image
          source={questions[currentQuestionIndex].questionImage}
          style={styles.image}
        ></Image>
      </View>
      <View></View>
      <View style={styles.grid}>
        {currentQuestion?.Options?.map((Options, index) => (
          <TouchableOpacity
            style={[
              styles.button,
              answers[currentQuestionIndex] !== undefined &&
                Options === currentQuestion.correctOption && {
                  backgroundColor: "#70e000",
                },
              answers[currentQuestionIndex] !== undefined &&
                Options !== currentQuestion.correctOption && {
                  backgroundColor: "#f21b3f",
                },
            ]}
            key={index}
            onPress={() => handleAnswerButtonClick(Options)}
          >
            <Text style={styles.buttonText}>{Options}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button_space}></TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#24ded3",
    flexDirection: "column",
  },
  heading: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 70,
  },
  button: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    width: 165,
    height: 70,
    paddingVertical: "3.5%",
    marginHorizontal: 15,
    marginBottom: 28,
    marginTop: 10,
  },
  correct_button: {
    backgroundColor: "green",
    alignSelf: "center",
    borderRadius: 20,
    width: 165,
    height: 70,
    paddingVertical: "3.5%",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  incorrect_button: {
    backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 20,
    width: 165,
    height: 70,
    paddingVertical: "3.5%",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button_skip: {
    backgroundColor: "white", //"rgba(52, 52, 52, 0.0)",
    alignSelf: "center",
    borderRadius: 20,
    width: 350,
    height: 80,
    paddingVertical: "3.5%",
    marginTop: 50,
  },
  button_space: {
    backgroundColor: "rgba(52, 52, 52, 0.0)",
    alignSelf: "center",
    borderRadius: 20,
    width: 350,
    height: 30,
    paddingVertical: "3.5%",
    marginTop: 50,
  },
  buttonText: {
    color: "black",
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
  image_frame: {
    aspectRatio: 1,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 5,
    width: 300,
    height: 310,
    flexDirection: "column",
    marginTop: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default Quiz;
