import { StyleSheet, View } from "react-native";

function CenteredRowView({ children }) {
  return <View style={styles.container}>{children}</View>;
}
export default CenteredRowView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
