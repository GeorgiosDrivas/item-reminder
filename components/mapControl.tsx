import { StyleSheet, View, Text, Pressable } from "react-native";

export default function MapControl() {
  return (
    <View style={styles.flex}>
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
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 0.3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
