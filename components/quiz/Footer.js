import { View, Text, StyleSheet } from "react-native";
import CenteredRowView from "../CenteredRowView";

function Footer({ score }) {
  return (
    <View style={styles.container}>
      <CenteredRowView>
        <Text style={styles.text}>Score: {score}</Text>
      </CenteredRowView>
    </View>
  );
}
export default Footer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "grey",
    width: "100%",
    padding: 8,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});
