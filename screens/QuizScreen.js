import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import capitalCitiesData from "../assets/gameData/capitalCitiesData";
import MyButton from "../components/MyButton";
import { ShuffleArray } from "../assets/helperFunctions/HelperFunctions";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

const quizData = capitalCitiesData;

function QuizScreen() {
  const [gameData, setGameData] = useState({ country: "", capital: "" });
  const [options, setOptions] = useState([]);
  const [userSelected, setUserSelected] = useState();

  // to do
  //useEffect so it loads a random country on load
  // generate random number from the length of quiz data
  // use random number to pick a country
  // put that country and answer into a gameData state
  // add a options array state and add the correct option to the array then add 3 more random options

  // on press check if it matches the correct answer and show notification
  // if it is incorrect save the answer to a sql lite database

  // show all results in a list on the quiz screen will need a results state object with 2 arrays correct and incorrect

  useLayoutEffect(() => {
    let randNum = Math.floor(Math.random() * quizData.length);
    setGameData((val) => ({
      country: quizData[randNum].country,
      capital: quizData[randNum].capital,
    }));

    const optionsArr = [quizData[randNum].capital];

    while (optionsArr.length < 4) {
      randNum = Math.floor(Math.random() * quizData.length);
      optionsArr.push(quizData[randNum].capital);
    }

    const shuffledArray = ShuffleArray(optionsArr);
    setOptions((val) => [...shuffledArray]);
  }, [userSelected]);

  function answerHandler(selected) {
    if (selected === gameData.capital) {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: `${selected} Is Correct!`,
        textBody: `The Capital City of ${gameData.country} is ${gameData.capital}`,
        autoClose: 1500,
        onHide: () => {
          setUserSelected(selected);
        },
      });
      console.log("correct");
    } else {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: `${selected} Is Incorrect`,
        textBody: `The Capital City of ${gameData.country} is ${gameData.capital}`,
        autoClose: 1000,
        onHide: () => {
          setUserSelected(selected);
        },
      });

      console.log("Wrong");
    }
    console.log(selected);
  }

  return (
    <View style={styles.outerContainer}>
      <AlertNotificationRoot />
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          What is the capital city of {gameData.country} ?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text={options[0]}
          onPress={() => {
            answerHandler(options[0]);
          }}
        />
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text={options[1]}
          onPress={() => {
            answerHandler(options[1]);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text={options[2]}
          onPress={() => {
            answerHandler(options[2]);
          }}
        />
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text={options[3]}
          onPress={() => {
            answerHandler(options[3]);
          }}
        />
      </View>
    </View>
  );
}
export default QuizScreen;

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 8,
  },
  questionContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  btnStyle: {
    width: "45%",
    backgroundColor: "#dddcdc",
    borderColor: "#9593f5",
    borderWidth: 1,
    height: "auto",
    marginBottom: 8,
  },
  btnText: {
    color: "black",
    fontSize: 16,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
