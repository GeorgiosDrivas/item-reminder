import { StyleSheet, View, Text, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";

export default function MapControl() {
  return (
    <View style={styles.flex}>
      <ThemedText>Hello</ThemedText>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.addBtn,
            styles.btn,
            pressed && styles.pressed,
          ]}
          onPress={() => console.log("Add Location")}
        >
          <Text style={styles.text}>ADD LOCATION</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.clearBtn,
            styles.btn,
            pressed && styles.pressed,
          ]}
          onPress={() => console.log("Clear Location")}
        >
          <Text style={styles.text}>CLEAR LOCATION</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 0.3,
    width: "100%",
    height: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    borderTopColor: "#DAD9D9",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addBtn: {
    backgroundColor: "#16C1E8",
    marginRight: 10,
  },
  clearBtn: {
    backgroundColor: "#EA5151",
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
});
