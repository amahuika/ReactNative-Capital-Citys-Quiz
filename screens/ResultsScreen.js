import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { DatabaseConnection } from "../assets/database/DatabaseConnection";

function ResultsScreen(props) {
  const [incorrectResults, setIncorrectResults] = useState([]);

  const db = DatabaseConnection.getConnection();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM table_results", [], (txt, results) => {
        console.log(results.rows._array.length);
        console.log("here");
        setIncorrectResults((val) => [...results.rows._array]);
      });
    });
  }

  console.log(incorrectResults);
  return (
    <View>
      <Text>Results</Text>
      {incorrectResults.map((item) => {
        return <Text key={item.id}>{item.item}</Text>;
      })}
    </View>
  );
}
export default ResultsScreen;
