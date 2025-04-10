import { useState } from "react";
import { View, Modal, Pressable } from "react-native";
import MapScreen from "./(tabs)/mapLayout";
import ItemsListScreen from "./(tabs)/itemsListLayout";
import { layoutStyles } from "./style";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import { StoreProvider } from "@/store/context";

export default function RootLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <StoreProvider>
      <View style={layoutStyles.container}>
        <MapScreen />
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <ItemsListScreen />
          <Pressable
            onPress={() => setModalVisible(false)}
            style={layoutStyles.closeButton}
          >
            <RightArrow width={24} height={24} />
          </Pressable>
        </Modal>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={layoutStyles.itemsListButton}
        >
          <LeftArrow width={24} height={24} />
        </Pressable>
      </View>
    </StoreProvider>
  );
}
