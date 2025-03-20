import { Pressable, TextInput, View, Text } from "react-native";
import { itemsListStyles } from "./styles";

interface Props {
  newItem: string;
  setNewItem: (text: string) => void;
}

export default function ListControl({ newItem, setNewItem }: Props) {
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
    </>
  );
}
