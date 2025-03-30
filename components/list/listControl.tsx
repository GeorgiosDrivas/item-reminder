import { Pressable, TextInput, View, Text } from "react-native";
import { itemsListStyles } from "./styles";
import { useState } from "react";
import { listControlProps } from "@/types/listTypes";

export default function ListControl({ addItem, clearItems }: listControlProps) {
  const [newItem, setNewItem] = useState("");

  return (
    <>
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
          onPress={() => {
            addItem(newItem);
            setNewItem("");
          }}
        >
          <Text style={itemsListStyles.text}>ADD ITEM</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            itemsListStyles.clearBtn,
            itemsListStyles.btn,
            pressed && itemsListStyles.pressed,
          ]}
          onPress={clearItems}
        >
          <Text style={itemsListStyles.text}>CLEAR LIST</Text>
        </Pressable>
      </View>
    </>
  );
}
