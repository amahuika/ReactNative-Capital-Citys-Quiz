import { StyleSheet, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import capitalCitiesData from "../assets/gameData/capitalCitiesData";
import axios from "axios";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { getWindDirection } from "../assets/helperFunctions/HelperFunctions";
import { LinearGradient } from "expo-linear-gradient";
import WeatherContainer from "../components/weatherScreen/WeatherContainer";

const data = capitalCitiesData.map((item, index) => {
  return `${item.country} - ${item.capital}`;
});

const apiKey = "&appid=a68ccd362f583dcd372f2d38ca449aa8";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function WeatherScreen() {
  const [selected, setSelected] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [weather, setWeather] = useState({
    icon: "",
    temp: "",
    feels_like: "",
    temp_min: "",
    temp_max: "",
    description: "",
    humidity: "",
    visibility: "",
    speed: "",
    windDirection: "",
  });

  function selectHandler(selected) {
    const city = selected.split(" - ").pop();
    const country = selected.split(" - ").shift();
    setSelected(`${city}, ${country}`);

    axios
      .get(`${baseUrl}${city}${apiKey}&units=metric`)
      .then((response) => {
        const allWeather = response.data;
        const updateWeather = {
          icon: allWeather.weather[0].icon,
          temp: allWeather.main.temp,
          feels_like: allWeather.main.feels_like,
          temp_min: allWeather.main.temp_min,
          temp_max: allWeather.main.temp_max,
          description: allWeather.weather[0].description,
          humidity: allWeather.main.humidity,
          visibility: allWeather.visibility / 1000,
          speed: allWeather.wind.speed,
          windDirection: getWindDirection(allWeather.wind.deg),
        };
        setWeather((val) => {
          return { ...updateWeather };
        });
        setErrorMessage("");
      })
      .catch(function (error) {
        console.log(error.toString());
        const message = error.toString().split(": ").pop();
        console.log(message);
        setErrorMessage("Something went wrong! \n" + message);
      });
  }

  return (
    <LinearGradient colors={["#129acf", "#efefef"]} style={styles.container}>
      <View style={styles.selectContainer}>
        <SelectDropdown
          data={data}
          defaultButtonText="Select a city"
          buttonStyle={styles.buttonStyle}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={styles.rowTextStyle}
          onSelect={(item, index) => {
            selectHandler(item);
          }}
          renderDropdownIcon={() => (
            <FontAwesome name="angle-down" size={36} color="black" />
          )}
        />
      </View>
      <WeatherContainer
        {...weather}
        city={selected}
        errorMessage={errorMessage}
      />
    </LinearGradient>
  );
}
export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  selectContainer: {},
  dropdownStyle: {
    backgroundColor: "#4f4d4d",
    borderRadius: 4,
    height: "60%",
  },
  rowTextStyle: {
    color: "#fefefe",
  },
  buttonStyle: {
    width: "100%",
    backgroundColor: "#fefefe",
    borderRadius: 4,
    elevation: 4,
  },
});
