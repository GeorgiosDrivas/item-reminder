import ListControl from "@/components/list/listControl";
import { Text, View } from "react-native";
import { indexStyles, listStyles } from "../style";
import { useState } from "react";

export default function ItemsList() {
  const [itemsList, setItemsList] = useState<string[]>([]);

  const addItem = (item: string) => {
    if (item.trim()) {
      setItemsList((prev) => [...prev, item]);
    }
  };

  const clearItems = () => {
    setItemsList([]);
  };

  return (
    <>
      <View style={indexStyles.list}>
        {itemsList.map((item, index) => (
          <View key={index}>
            <Text style={listStyles.item}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={indexStyles.flex}>
        <ListControl addItem={addItem} clearItems={clearItems} />
      </View>
    </>
  );
}
