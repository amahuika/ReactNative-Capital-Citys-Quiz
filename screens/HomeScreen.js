import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
        info="Test your knowledge on the capital cities of the world"
        onPress={quizPress}
      />
      <MyButton
        text="Results"
        btnStyle={styles.resultsButton}
        info="View your past results and see what answers you got incorrect"
        onPress={resultsPress}
      />
      <MyButton
        text="Weather"
        btnStyle={styles.weatherButton}
        info="View the current weather in any of the capital cities of the world"
        onPress={weatherPress}
      />
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#C1CACB",
    padding: 24,
  },
  weatherButton: {
    backgroundColor: "#83C8E4",
    padding: 16,
  },

  quizButton: {
    padding: 16,
    backgroundColor: "#079813",
  },

  resultsButton: {
    padding: 16,
    backgroundColor: "#f23838",
  },
});
