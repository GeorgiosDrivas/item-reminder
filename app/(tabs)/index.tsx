import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return <ThemedText style={styles.text}>Hello</ThemedText>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20,
  },
});
