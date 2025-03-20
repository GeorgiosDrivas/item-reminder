import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TextFieldScreen() {
  return (
    <SafeAreaProvider>
      <View style={styles.flex}>
        <Text style={styles.text}>ADD ITEMS TO GET NOTIFIED</Text>
      </View>
      <View style={styles.sec}>
        <Pressable
          style={({ pressed }) => [
            styles.addBtn,
            styles.btn,
            pressed && styles.pressed,
          ]}
          onPress={() => console.log("Add Location")}
        >
          <Text style={styles.text}>ADD ITEM</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.clearBtn,
            styles.btn,
            pressed && styles.pressed,
          ]}
          onPress={() => console.log("Add Location")}
        >
          <Text style={styles.text}>CLEAR LIST</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  sec: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
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
  pressed: {
    opacity: 0.7,
  },
});
