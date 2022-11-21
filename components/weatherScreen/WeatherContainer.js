import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CenteredRowView from "../CenteredRowView";

function WeatherContainer({
  description,
  humidity,
  windDirection,
  speed,
  visibility,
  temp,
  temp_max,
  temp_min,
  feels_like,
  city,
  icon,
}) {
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.weatherHeader}>
        <Text style={styles.weatherHeaderText}>
          {city === ""
            ? "Select a city to view current weather"
            : "Current Conditions"}
        </Text>
      </View>
      {city !== "" && (
        <>
          <CenteredRowView>
            <Text style={styles.tempText}>{city}</Text>
          </CenteredRowView>

          <CenteredRowView>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
              }}
              style={{
                height: 50,
                width: 50,
              }}
            />
            <Text>{description}</Text>
          </CenteredRowView>
          <View style={styles.tempContainer}>
            <View>
              <Text style={styles.tempText}>Temp {temp}°C</Text>
              <Text>Feels like {feels_like}°C</Text>
            </View>

            <View>
              <Text style={styles.tempText}>
                <FontAwesome name="thermometer-full" size={24} color="red" />{" "}
                max {temp_max}°C
              </Text>
              <Text style={styles.tempText}>
                <FontAwesome name="thermometer-0" size={24} color="blue" /> min{" "}
                {temp_min}°C
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 16,
              justifyContent: "space-between",
            }}
          >
            <Text>Humidity: {humidity}%</Text>
            <Text>Visibility: {visibility}km</Text>
            <Text>
              {" "}
              Wind: {speed}m/s {windDirection}{" "}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
export default WeatherContainer;

const styles = StyleSheet.create({
  weatherContainer: {
    backgroundColor: "#fefefe",
    marginTop: 32,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingBottom: 16,
    elevation: 4,
    overflow: "hidden",
  },
  weatherHeader: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginBottom: 4,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherHeaderText: {
    fontSize: 26,
    color: "#4a4747",
  },
  tempContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "black",
  },
  tempText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4a4747",
  },
});
