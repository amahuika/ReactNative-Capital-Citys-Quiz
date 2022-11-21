import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import ResultsScreen from "./screens/ResultsScreen";
import WeatherScreen from "./screens/WeatherScreen";
import GamePlayScreen from "./screens/GamePlayScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  function MyStack() {
    return (
      <Tab.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Tab.Screen
          name="homeTab"
          component={HomeScreen}
          options={{
            headerTitle: "Welcome",
            tabBarLabel: "Home",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="quiz"
          component={QuizScreen}
          options={{
            headerTitle: "Capitals Of The World",
            tabBarLabel: "Quiz",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="question-circle-o" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="results"
          component={ResultsScreen}
          options={{
            headerTitle: "Your Results",
            tabBarLabel: "Results",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="weather"
          component={WeatherScreen}
          options={{
            headerTitle: "Weather in the Capitals",
            tabBarLabel: "Weather",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="cloud" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="#fefefe" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen
            name="home"
            component={MyStack}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
            }}
          />
          <Stack.Screen
            name="gamePlayScreen"
            component={GamePlayScreen}
            options={{
              headerBackTitle: "Quit",
              headerBackTitleVisible: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
