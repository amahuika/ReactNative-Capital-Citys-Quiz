import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import capitalCitiesData from "../assets/gameData/capitalCitiesData";
import {
  ShuffleArray,
  RandomNum,
} from "../assets/helperFunctions/HelperFunctions";
import { AlertCorrect, AlertIncorrect } from "../assets/toasters/MyToasters";
import { AlertNotificationRoot } from "react-native-alert-notification";
import OptionButtons from "../components/quiz/OptionButtons";
import { DatabaseConnection } from "../assets/database/DatabaseConnection";
import ResultsLists from "../components/quiz/ResultsLists";

const AllGamePlayData = capitalCitiesData;
let GamePlayData = capitalCitiesData;

function GamePlayScreen({ route, navigation }) {
  const [gameData, setGameData] = useState({
    country: "",
    capital: "",
    continent: "",
  });
  const [options, setOptions] = useState([]);
  const [userSelected, setUserSelected] = useState();
  const [results, setResults] = useState({ correct: [], incorrect: [] });
  const [quizCount, setQuizCount] = useState(0);

  // connect to db
  const db = DatabaseConnection.getConnection();
  const Continent = route.params.continent;
  GamePlayData = route.params.GamePlayData;
  // create table if not exists function
  function createTable() {
    db.transaction((tx) => {
      // tx.executeSql("DROP TABLE table_results");
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS table_results (id INTEGER PRIMARY KEY AUTOINCREMENT, incorrect VARCHAR(255), correct VARCHAR(255), country VARCHAR(255), continent VARCHAR(255))",
        []
      );
    });
  }

  useLayoutEffect(() => {
    navigation.setOptions({ title: Continent });
    // create table
    createTable();

    if (quizCount === GamePlayData.length) {
      navigation.navigate("quiz");
      return;
    }
    setGameData((val) => ({
      country: GamePlayData[quizCount].country,
      capital: GamePlayData[quizCount].capital,
      continent: GamePlayData[quizCount].continent,
    }));

    const optionsArr = [GamePlayData[quizCount].capital];

    while (optionsArr.length < 4) {
      let randNum = RandomNum(GamePlayData.length);
      optionsArr.push(AllGamePlayData[randNum].capital);
    }

    const shuffledArray = ShuffleArray(optionsArr);
    setOptions((val) => [...shuffledArray]);
    setQuizCount((val) => val + 1);
  }, [userSelected]);

  // answer handler
  function answerHandler(selected) {
    // unique id
    const id = new Date().valueOf();

    const userSelectHandle = () => setUserSelected(selected);

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

      insertData(
        selected,
        gameData.capital,
        gameData.country,
        gameData.continent
      );

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

  // insert data to DB function
  function insertData(incorrect, correct, country, continent) {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO table_results (incorrect, correct, country, continent) VALUES (?,?,?,?)",
        [incorrect, correct, country, continent]
      );
    });
  }

  return (
    <View style={styles.outerContainer}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View style={styles.questionCount}>
          <Text style={{ color: "white", fontSize: 18 }}>
            {quizCount}/{GamePlayData.length}
          </Text>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{gameData.country}</Text>
      </View>
      <OptionButtons options={options} onPressAnswer={answerHandler} />

      <View>
        <Text>Results</Text>
        <View>
          <Text>2/5</Text>
        </View>
      </View>

      <ResultsLists correct={results.correct} incorrect={results.incorrect} />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "grey",
          width: "100%",
          padding: 8,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontSize: 24, color: "white" }}>
            Score: {results.correct.length}
          </Text>
        </View>
      </View>
      <AlertNotificationRoot />
    </View>
  );
}

export default GamePlayScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  questionContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 8,
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
  listHeaders: {
    width: "48%",
    textAlign: "center",
  },
  questionCount: {
    backgroundColor: "green",
    padding: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
