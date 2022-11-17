import { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import capitalCitiesData from "../assets/gameData/capitalCitiesData";
import MyButton from "../components/MyButton";
import {
  ShuffleArray,
  RandomNum,
} from "../assets/helperFunctions/HelperFunctions";
import { AlertCorrect, AlertIncorrect } from "../assets/toasters/MyToasters";
import { AlertNotificationRoot } from "react-native-alert-notification";
import OptionButtons from "../components/quiz/OptionButtons";
import { DatabaseConnection } from "../assets/database/DatabaseConnection";

const quizData = capitalCitiesData;

function QuizScreen() {
  const [gameData, setGameData] = useState({ country: "", capital: "" });
  const [options, setOptions] = useState([]);
  const [userSelected, setUserSelected] = useState();
  const [results, setResults] = useState({ correct: [], incorrect: [] });
  const [hasStarted, setHasStarted] = useState(false);

  const [fetchReturn, setFetchReturn] = useState([]);

  const db = DatabaseConnection.getConnection();

  useEffect(() => {
    createTable();
  }, []);

  function createTable() {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS table_results (id INTEGER PRIMARY KEY AUTOINCREMENT, item VARCHAR(255))",
        []
      );
    });
  }

  useLayoutEffect(() => {
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
    if (selected === gameData.capital) {
      AlertCorrect(
        selected,
        gameData.capital,
        gameData.country,
        setUserSelected
      );

      setResults((value) => {
        return {
          correct: [`${gameData.country} - ${selected}`, ...value.correct],
          incorrect: [...value.incorrect],
        };
      });
    } else {
      AlertIncorrect(
        selected,
        gameData.capital,
        gameData.country,
        setUserSelected
      );

      insertData(selected);

      setResults((value) => {
        return {
          correct: [...value.correct],
          incorrect: [`${gameData.country} - ${selected}`, ...value.incorrect],
        };
      });
    }
  }

  function onStart() {
    setHasStarted(true);
  }

  function insertData(item) {
    db.transaction((tx) => {
      tx.executeSql("INSERT INTO table_results (item) VALUES (?)", [item]);
      // (tx, results) => {
      //   console.log("Results", results.rowsAffected);
      //   console.log(item);
      // };
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
        <>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{gameData.country}</Text>
          </View>
          <OptionButtons options={options} onPressAnswer={answerHandler} />
        </>
      )}

      <View style={styles.resultsOuter}>
        <View style={styles.resultsInner}>
          <Text>Correct</Text>
          {results.correct.map((item, index) => (
            <View key={index} style={styles.resultsText}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.resultsInner}>
          <Text>Incorrect</Text>
          {results.incorrect.map((item, index) => (
            <View key={index} style={styles.resultsText}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
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
    fontSize: 16,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  resultsOuter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  resultsInner: {
    width: "48%",
    alignItems: "center",
  },
  resultsText: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    marginVertical: 4,
    width: "100%",
  },
});
