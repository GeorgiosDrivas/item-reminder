import ListControl from "@/components/list/listControl";
import { useState } from "react";
import { View } from "react-native";
import { indexStyles } from "../style";

export default function ItemsList() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <View style={indexStyles.list}></View>
      <View style={indexStyles.flex}>
        <ListControl newItem={newItem} setNewItem={setNewItem} />
      </View>
    </>
  );
}
