import { useState } from "react";
import { View, Modal, Pressable, Text } from "react-native";
import HomeScreen from "./(tabs)";
import ItemsList from "./(tabs)/itemsList";
import { layoutStyles } from "./style";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

export default function RootLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={layoutStyles.container}>
      <HomeScreen />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ItemsList />
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
  );
}
