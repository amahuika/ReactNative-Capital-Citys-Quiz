import { StyleSheet, View } from "react-native";
import MyButton from "../MyButton";

function OptionButtons({ options, onPressAnswer }) {
  const [optionOne, optionTwo, optionThree, optionFour] = [...options];

  return (
    <>
      <View style={styles.buttonContainer}>
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text={optionOne}
          onPress={() => {
            onPressAnswer(optionOne);
          }}
        />
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text={optionTwo}
          onPress={() => {
            onPressAnswer(optionTwo);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text={optionThree}
          onPress={() => {
            onPressAnswer(optionThree);
          }}
        />
        <MyButton
          btnStyle={styles.btnStyle}
          textStyle={styles.btnText}
          text={optionFour}
          onPress={() => {
            onPressAnswer(optionFour);
          }}
        />
      </View>
    </>
  );
}
export default OptionButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  btnStyle: {
    width: "48%",
    backgroundColor: "#dddcdc",
    borderColor: "#9593f5",
    borderWidth: 1,
    marginBottom: 8,
  },
  btnText: {
    color: "black",
    fontSize: 16,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
