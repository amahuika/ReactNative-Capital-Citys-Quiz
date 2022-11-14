import { StyleSheet, Text, View } from "react-native";
import capitalCitiesData from "../assets/gameData/capitalCitiesData";
import MyButton from "../components/MyButton";

const quizData = capitalCitiesData;
const dummydata = [{ city: "wellington", country: "New Zealand" }];

function QuizScreen() {
  // to do
  //useEffect so it loads a random country on load
  // generate random number from the length of quiz data
  // use random number to pick a country
  // put that country and answer into a gameData state
  // add a options array state and add the correct option to the array then add 3 more random options

  // on press check if it matches the correct answer and show notification
  // if it is incorrect save the answer to a sql lite database

  // show all results in a list on the quiz screen will need a results state object with 2 arrays correct and incorrect

  return (
    <View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          What is the capital city of {dummydata[0].country} ?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text="option 1"
        />
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text="option 2"
        />
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text="option 3"
        />
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text="option 4"
        />
      </View>
    </View>
  );
}
export default QuizScreen;

const styles = StyleSheet.create({
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
