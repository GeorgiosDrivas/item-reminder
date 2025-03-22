import ListControl from "@/components/list/listControl";
import { Text, View } from "react-native";
import { indexStyles, listStyles } from "../style";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ItemsList() {
  const [itemsList, setItemsList] = useState<string[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem("itemsList");
        if (storedItems) {
          setItemsList(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };

    loadItems();
  }, []);

  useEffect(() => {
    const saveItems = async () => {
      try {
        await AsyncStorage.setItem("itemsList", JSON.stringify(itemsList));
      } catch (error) {
        console.error("Error saving items:", error);
      }
    };

    saveItems();
  }, [itemsList]);

  const addItem = (item: string) => {
    if (item.trim()) {
      setItemsList((prev) => [...prev, item]);
    }
  };

  const clearItems = async () => {
    try {
      await AsyncStorage.removeItem("itemsList");
      setItemsList([]);
    } catch (error) {
      console.error("Error clearing items:", error);
    }
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
