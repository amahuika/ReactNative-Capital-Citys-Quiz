import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DatabaseConnection } from "../assets/database/DatabaseConnection";
import MyButton from "../components/MyButton";

function ResultsScreen(props) {
  const [incorrectResults, setIncorrectResults] = useState([]);

  const db = DatabaseConnection.getConnection();

  useEffect(() => {
    getData();
  }, []);

  function clearTable() {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM table_results", [], (txt, results) => {
        setIncorrectResults([]);
      });
    });
  }

  function getData() {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM table_results", [], (txt, results) => {
        setIncorrectResults((val) => [...results.rows._array]);
      });
    });
  }

  console.log(incorrectResults);

  return (
    <View>
      <View style={styles.buttonContainer}>
        <MyButton
          text="Clear"
          btnStyle={styles.buttonClear}
          onPress={clearTable}
        />
        <MyButton
          text="Refresh"
          btnStyle={styles.buttonRefresh}
          onPress={getData}
        />
      </View>
      {incorrectResults.map((item) => {
        return (
          <View key={item.id} style={styles.listContainer}>
            <Text style={styles.countryText}>{item.country}</Text>
            <Text>
              you selected <Text style={styles.boldText}>{item.incorrect}</Text>{" "}
              correct answer is{" "}
              <Text style={styles.boldText}>{item.correct}</Text>
            </Text>
          </View>
        );
      })}
    </View>
  );
}
export default ResultsScreen;

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonRefresh: {
    width: "40%",
    backgroundColor: "#28be32",
  },
  buttonClear: {
    width: "40%",
    backgroundColor: "#be2828",
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#f64c4c",
    marginHorizontal: 16,
    padding: 4,
    borderRadius: 4,
    backgroundColor: "#ebb1b1",
    elevation: 4,
  },
  countryText: {
    fontSize: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
});
