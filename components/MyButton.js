import { Pressable, Text, StyleSheet } from "react-native";

function MyButton({ text, btnStyle, textStyle, info, onPress }) {
  return (
    <Pressable
      android_ripple={{ color: "#fefefe" }}
      style={[styles.button, btnStyle]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      {info !== undefined && <Text style={styles.infoText}>{info}</Text>}
    </Pressable>
  );
}
export default MyButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 8,
    elevation: 8,
    padding: 8,
    marginVertical: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  infoText: {
    textAlign: "center",
    color: "white",
  },
});
