import { StyleSheet, View, Text } from "react-native";
import MyButton from "../MyButton";

function ShowResults({ correct, questions, donePressHandle }) {
  return (
    <View style={styles.resultsContainer}>
      <View style={styles.resultsInner}>
        <Text style={styles.resultsText}>Score</Text>
        <Text style={styles.resultsText}>
          {correct}/{questions}
        </Text>
      </View>
      <View>
        <MyButton
          text="Done"
          btnStyle={styles.backButton}
          onPress={() => donePressHandle()}
        />
      </View>
    </View>
  );
}
export default ShowResults;

const styles = StyleSheet.create({
  resultsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  resultsInner: {
    backgroundColor: "green",
    marginTop: 16,
    borderRadius: 100,
    padding: 26,
  },
  resultsText: {
    color: "#fefefe",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    backgroundColor: "#483b3b",
    paddingHorizontal: 32,
  },
});
