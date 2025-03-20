import { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";

export default function ItemsList() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <View style={styles.list}></View>
      <View style={styles.flex}>
        <TextInput
          style={styles.textInput}
          onChangeText={setNewItem}
          value={newItem}
          placeholder="Enter Item"
        />
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.addBtn,
              styles.btn,
              pressed && styles.pressed,
            ]}
            onPress={() => console.log("Add Item")}
          >
            <Text style={styles.text}>ADD ITEM</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.clearBtn,
              styles.btn,
              pressed && styles.pressed,
            ]}
            onPress={() => console.log("Clear Item")}
          >
            <Text style={styles.text}>CLEAR LIST</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
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
  textInput: {
    borderWidth: 1,
    width: 300,
  },
});
