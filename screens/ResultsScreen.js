import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DatabaseConnection } from "../assets/database/DatabaseConnection";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome } from "@expo/vector-icons";

import MyButton from "../components/MyButton";
import CenteredRowView from "../components/CenteredRowView";

const dropdownData = [
  "All Results",
  "Europe",
  "Americas",
  "Australia & Oceania",
  "Africa",
  "Asia",
];

function ResultsScreen() {
  const [incorrectResults, setIncorrectResults] = useState([]);
  const [resultsTitle, setResultsTitle] = useState("All Results");

  const db = DatabaseConnection.getConnection();

  useEffect(() => {
    getAllData();
  }, []);

  function clearTable() {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM table_results", [], (txt, results) => {
        setIncorrectResults([]);
      });
    });
  }

  function getAllData() {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM table_results ORDER BY country ASC",
        [],
        (txt, results) => {
          setIncorrectResults((val) => [...results.rows._array]);
        }
      );
    });
  }

  function getDataContinent(continent) {
    setResultsTitle((val) => continent);
    if (continent === "All Results") {
      getAllData();
      return;
    }
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM table_results WHERE continent = '${continent}' ORDER BY country ASC`,
        [],
        (txt, results) => {
          setIncorrectResults((val) => [...results.rows._array]);
        }
      );
    });
  }

  return (
    <View style={styles.container}>
      <CenteredRowView>
        <SelectDropdown
          data={dropdownData}
          defaultButtonText="Select results to be displayed"
          buttonStyle={styles.buttonStyle}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={styles.rowTextStyle}
          buttonTextAfterSelection={() => "Select results to be displayed"}
          onSelect={(item, index) => {
            getDataContinent(item);
          }}
          renderDropdownIcon={() => (
            <FontAwesome name="angle-down" size={36} color="black" />
          )}
        />
      </CenteredRowView>
      <CenteredRowView>
        <MyButton
          text="Clear All"
          btnStyle={styles.buttonClear}
          onPress={clearTable}
        />
      </CenteredRowView>
      <View style={styles.resultsTitle}>
        <Text style={styles.resultsTitleText}>{resultsTitle}</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
          paddingTop: 8,
        }}
        style={{ padding: 8 }}
      >
        {incorrectResults.map((item) => {
          return (
            <View key={item.id} style={styles.listContainer}>
              <Text style={styles.countryText}>{item.country}</Text>
              <Text>
                You selected{" "}
                <Text style={styles.boldText}>{item.incorrect},</Text> Correct
                answer is <Text style={styles.boldText}>{item.correct}</Text>
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonRefresh: {
    width: "40%",
    backgroundColor: "#079813",
  },
  buttonClear: {
    width: "40%",
    backgroundColor: "#f23838",
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
  rowTextStyle: {
    color: "#fefefe",
  },
  buttonStyle: {
    width: "80%",
    backgroundColor: "#fefefe",
    borderRadius: 4,
    elevation: 4,
    marginTop: 16,
  },
  dropdownStyle: {
    backgroundColor: "#4f4d4d",
    borderRadius: 4,
  },
  resultsTitle: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 16,
  },
  resultsTitleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
