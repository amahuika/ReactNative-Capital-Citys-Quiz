import { View, Text, StyleSheet, ScrollView } from "react-native";

const List = ({ items, textStyle }) => {
  return items.map((value) => (
    <View style={[styles.resultsText, textStyle]} key={value.id}>
      <Text>{value.answer}</Text>
    </View>
  ));
};

function ResultsLists({ correct, incorrect }) {
  return (
    <>
      <View style={styles.resultsHeaderContainer}>
        <Text style={styles.headerCorrect}>
          {correct.length > 0 ? `Correct: ${correct.length}` : ""}
        </Text>

        <Text style={styles.headerIncorrect}>
          {incorrect.length > 0 ? `Incorrect: ${incorrect.length}` : ""}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.resultsOuter}>
          <View style={styles.resultsInner}>
            {correct.length > 0 && (
              <>
                {/* <Text style={styles.headerCorrect}>Correct</Text> */}
                <List items={correct} textStyle={styles.textCorrect} />
              </>
            )}
          </View>

          <View style={styles.resultsInner}>
            {incorrect.length > 0 && (
              <>
                {/* <Text style={styles.headerIncorrect}>Incorrect</Text> */}

                <List items={incorrect} textStyle={styles.textIncorrect} />
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
export default ResultsLists;

const styles = StyleSheet.create({
  resultsOuter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 100,
    paddingHorizontal: 8,
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
    elevation: 4,
    backgroundColor: "#fefefe",
  },
  textIncorrect: {
    borderColor: "#f23838",
  },
  textCorrect: {
    borderColor: "#079813",
  },
  headerCorrect: {
    textAlign: "center",
    width: "48%",
    fontSize: 16,
    marginBottom: 8,
    color: "#079813",
  },
  headerIncorrect: {
    textAlign: "center",
    width: "48%",
    fontSize: 16,
    marginBottom: 8,
    color: "#f23838",
  },
  resultsHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
});
