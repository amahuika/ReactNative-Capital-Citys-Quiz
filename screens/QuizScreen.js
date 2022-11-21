import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import capitalCitiesData from "../assets/gameData/capitalCitiesData";
import MyButton from "../components/MyButton";
import { ShuffleArray } from "../assets/helperFunctions/HelperFunctions";

import ContinentBtnGroup from "../components/ContinentBtnGroup";

const AllGamePlayData = capitalCitiesData;

const Europe = capitalCitiesData.filter((item) => item.continent === "Europe");
const Africa = capitalCitiesData.filter((item) => item.continent === "Africa");
const Americas = capitalCitiesData.filter(
  (item) => item.continent === "Americas"
);
const Asia = capitalCitiesData.filter((item) => item.continent === "Asia");
const AustraliaOceania = capitalCitiesData.filter(
  (item) => item.continent === "Australia & Oceania"
);

let GamePlayData = capitalCitiesData;

function QuizScreen({ navigation }) {
  // has game started
  function onStart(continent) {
    switch (continent) {
      case "Europe":
        GamePlayData = ShuffleArray(Europe);
        break;
      case "Asia":
        GamePlayData = ShuffleArray(Asia);
        break;
      case "Oceania":
        GamePlayData = ShuffleArray(AustraliaOceania);
        continent = "Australia & Oceania";
        break;
      case "Africa":
        GamePlayData = ShuffleArray(Africa);
        break;
      case "Americas":
        GamePlayData = ShuffleArray(Americas);
        break;
      default:
        GamePlayData = ShuffleArray(AllGamePlayData);
        continent = "All Countries";
        break;
    }
    navigation.navigate("gamePlayScreen", {
      GamePlayData: GamePlayData,
      continent: continent,
    });
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.buttonContainer}>
        <Text>
          You will be given the name of a Country select the correct capital
          city fom the options provided
        </Text>
        <MyButton
          text="All Countries"
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          onPress={onStart}
        />
        <ContinentBtnGroup onStart={onStart} />
      </View>
    </View>
  );
}
export default QuizScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#C1CACB",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 32,
  },
  btnStyle: {
    backgroundColor: "#039414",
    width: "97%",
  },
  btnText: {
    color: "black",
    fontSize: 24,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "none",
    color: "white",
  },
});
