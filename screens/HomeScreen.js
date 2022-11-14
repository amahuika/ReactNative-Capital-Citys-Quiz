import { Pressable, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";

function HomeScreen({ navigation }) {
  function quizPress() {
    navigation.navigate("quiz");
  }
  function resultsPress() {
    navigation.navigate("results");
  }
  function weatherPress() {
    navigation.navigate("weather");
  }

  return (
    <View style={styles.outerContainer}>
      <MyButton
        text="Quiz"
        btnStyle={styles.quizButton}
        info="Tap Here! to test your knowledge on the capital cities of the world"
        onPress={quizPress}
      />
      <MyButton
        text="Results"
        btnStyle={styles.resultsButton}
        info="Tap here! to view your past results and see what answers you got incorrect"
        onPress={resultsPress}
      />
      <MyButton
        text="Weather"
        btnStyle={styles.weatherButton}
        info="Tap here! to check the current weather in any of the capital cities of the world"
        onPress={weatherPress}
      />
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    padding: 24,
  },
  weatherButton: {
    height: 120,
    backgroundColor: "#83C8E4",
  },

  quizButton: {
    height: 120,
    backgroundColor: "#079813",
  },

  resultsButton: {
    height: 120,
    backgroundColor: "#f23838",
  },
});
