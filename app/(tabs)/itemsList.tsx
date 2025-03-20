import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { itemsListStyles } from "./styles";

export default function ItemsList() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <View style={itemsListStyles.list}></View>
      <View style={itemsListStyles.flex}>
        <TextInput
          style={itemsListStyles.textInput}
          onChangeText={setNewItem}
          value={newItem}
          placeholder="Enter Item"
        />
        <View style={itemsListStyles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              itemsListStyles.addBtn,
              itemsListStyles.btn,
              pressed && itemsListStyles.pressed,
            ]}
            onPress={() => console.log("Add Item")}
          >
            <Text style={itemsListStyles.text}>ADD ITEM</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              itemsListStyles.clearBtn,
              itemsListStyles.btn,
              pressed && itemsListStyles.pressed,
            ]}
            onPress={() => console.log("Clear Item")}
          >
            <Text style={itemsListStyles.text}>CLEAR LIST</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
