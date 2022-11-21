import { StyleSheet, View } from "react-native";
import MyButton from "./MyButton";

function ContinentBtnGroup({ onStart }) {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <MyButton
          text="Europe"
          btnStyle={[styles.continentBtn, { backgroundColor: "#0069B3" }]}
          textStyle={styles.btnText}
          onPress={() => onStart("Europe")}
        />
        <MyButton
          text="Asia"
          btnStyle={[styles.continentBtn, { backgroundColor: "#FFCC01" }]}
          textStyle={styles.btnText}
          onPress={() => onStart("Asia")}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <MyButton
          text="Americas"
          btnStyle={[styles.continentBtn, { backgroundColor: "#B80D7F" }]}
          textStyle={styles.btnText}
          onPress={() => onStart("Americas")}
        />
        <MyButton
          text="Africa"
          btnStyle={[styles.continentBtn, { backgroundColor: "#F07D00" }]}
          textStyle={styles.btnText}
          onPress={() => onStart("Africa")}
        />
      </View>
      <View>
        <MyButton
          text="Australia & Oceania"
          btnStyle={[
            styles.continentBtn,
            { backgroundColor: "#E40613", width: "100%" },
          ]}
          textStyle={styles.btnText}
          onPress={() => onStart("Oceania")}
        />
      </View>
    </View>
  );
}
export default ContinentBtnGroup;

const styles = StyleSheet.create({
  btnText: {
    color: "black",
    fontSize: 24,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "none",
    color: "white",
  },
  continentBtn: {
    width: " 48%",
  },
});
