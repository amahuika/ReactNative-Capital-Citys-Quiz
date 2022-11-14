import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import ResultsScreen from "./screens/ResultsScreen";
import WeatherScreen from "./screens/WeatherScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fefefe" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="quiz"
            component={QuizScreen}
            options={{ title: "Capitals Of The World" }}
          />
          <Stack.Screen
            name="results"
            component={ResultsScreen}
            options={{ title: "Your Results" }}
          />
          <Stack.Screen
            name="weather"
            component={WeatherScreen}
            options={{ title: "Weather in the Capitals" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#ccb59b",
  },
});
