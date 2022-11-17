import { useLayoutEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import capitalCitiesData from "../assets/gameData/capitalCitiesData";
import MyButton from "../components/MyButton";
import { FontAwesome } from "@expo/vector-icons";

import {
  ShuffleArray,
  RandomNum,
} from "../assets/helperFunctions/HelperFunctions";
import { AlertCorrect, AlertIncorrect } from "../assets/toasters/MyToasters";
import { AlertNotificationRoot } from "react-native-alert-notification";
import OptionButtons from "../components/quiz/OptionButtons";
import { DatabaseConnection } from "../assets/database/DatabaseConnection";
import ResultsLists from "../components/quiz/ResultsLists";

const quizData = capitalCitiesData;

function QuizScreen() {
  const [gameData, setGameData] = useState({ country: "", capital: "" });
  const [options, setOptions] = useState([]);
  const [userSelected, setUserSelected] = useState();
  const [results, setResults] = useState({ correct: [], incorrect: [] });
  const [hasStarted, setHasStarted] = useState(false);

  // connect to db
  const db = DatabaseConnection.getConnection();

  // create table if not exists
  function createTable() {
    db.transaction((tx) => {
      //  tx.executeSql("DROP TABLE table_results");
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS table_results (id INTEGER PRIMARY KEY AUTOINCREMENT, incorrect VARCHAR(255), correct VARCHAR(255), country VARCHAR(255))",
        []
      );
    });
  }

  useLayoutEffect(() => {
    // create table
    createTable();

    let randNum = RandomNum(quizData.length);
    setGameData((val) => ({
      country: quizData[randNum].country,
      capital: quizData[randNum].capital,
    }));

    const optionsArr = [quizData[randNum].capital];

    while (optionsArr.length < 4) {
      randNum = RandomNum(quizData.length);
      optionsArr.push(quizData[randNum].capital);
    }

    const shuffledArray = ShuffleArray(optionsArr);
    setOptions((val) => [...shuffledArray]);
  }, [userSelected]);

  // answer handler
  function answerHandler(selected) {
    // unique id
    const id = new Date().valueOf();

    function userSelectHandle() {
      setUserSelected(selected);
    }

    if (selected === gameData.capital) {
      AlertCorrect(
        selected,
        gameData.capital,
        gameData.country,
        userSelectHandle
      );

      setResults((value) => {
        return {
          correct: [
            { id: id, answer: `${gameData.country} - ${selected}` },
            ...value.correct,
          ],
          incorrect: [...value.incorrect],
        };
      });
    } else {
      AlertIncorrect(
        selected,
        gameData.capital,
        gameData.country,
        userSelectHandle
      );

      // insert data to DB

      insertData(selected, gameData.capital, gameData.country);

      setResults((value) => {
        return {
          correct: [...value.correct],
          incorrect: [
            { id: id, answer: `${gameData.country} - ${selected}` },
            ...value.incorrect,
          ],
        };
      });
    }
  }
  console.log(results);

  // has game started
  function onStart() {
    setHasStarted(true);
  }

  // insert data to DB function
  function insertData(incorrect, correct, country) {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO table_results (incorrect, correct, country) VALUES (?, ?,?)",
        [incorrect, correct, country]
      );
    });
  }

  return (
    <View style={styles.outerContainer}>
      <AlertNotificationRoot />

      {!hasStarted && (
        <View style={styles.buttonContainer}>
          <Text>
            You will be given the name of a Country and you will have to select
            the correct capital city fom the options provided
          </Text>
          <MyButton
            text="Start quiz"
            btnStyle={styles.btnStyle}
            textStyle={styles.btnText}
            onPress={onStart}
          />
        </View>
      )}

      {hasStarted && (
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{gameData.country}</Text>
          </View>
          <OptionButtons options={options} onPressAnswer={answerHandler} />

          <ResultsLists
            correct={results.correct}
            incorrect={results.incorrect}
          />
        </ScrollView>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Pressable
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 16,
            padding: 8,
            borderColor: "#f0eeee",
            borderWidth: 1,
            width: "30%",
            borderRadius: 4,
            backgroundColor: "#ed4b4bff",
            elevation: 4,
          }}
          android_ripple={{ color: "#18d61c" }}
        >
          <Text style={{ marginEnd: 8, color: "#fefefe" }}>Restart</Text>
          <FontAwesome name="refresh" size={24} color="#fefefe" />
        </Pressable>
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
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 32,
  },
  btnStyle: {
    backgroundColor: "#dddcdc",
    borderColor: "#079813",
    borderWidth: 1,
  },
  btnText: {
    color: "black",
    fontSize: 24,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
