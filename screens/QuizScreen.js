import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import capitalCitiesData from "../assets/gameData/capitalCitiesData";
import MyButton from "../components/MyButton";
import { ShuffleArray } from "../assets/helperFunctions/HelperFunctions";

function QuizScreen() {
  const [gameData, setGameData] = useState({ country: "", capital: "" });
  const [options, setOptions] = useState([]);
  const [userSelected, setUserSelected] = useState();

  const quizData = capitalCitiesData;
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
    const randNum = Math.floor(Math.random() * quizData.length);
    setGameData((val) => ({
      country: quizData[randNum].country,
      capital: quizData[randNum].capital,
    }));

    const Array = [
      quizData[randNum].capital,
      quizData[randNum + 1].capital,
      quizData[randNum + 2].capital,
      quizData[randNum + 3].capital,
    ];

    const shuffledArray = ShuffleArray(Array);

    setOptions((val) => [...shuffledArray]);
  }, [userSelected]);

  function answerHandler(selected) {
    setUserSelected(selected);
    if (selected === gameData.capital) {
      console.log("correct");
    } else {
      console.log("Wrong");
    }
    console.log(selected);
  }

  return (
    <View style={styles.outerContainer}>
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
    paddingHorizontal: 4,
  },
  questionContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 16,
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
    height: 50,
    borderColor: "#9593f5",
    borderWidth: 1,
  },
  btnText: {
    color: "black",
    fontSize: 16,
    paddingTop: 4,
  },
});
