import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import HomeScreen from "./(tabs)";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import ItemsList from "./itemsList";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [screen, setScreen] = useState("home");

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const onGestureEvent = (event: any) => {
    if (event.nativeEvent.translationX > 50) {
      setScreen("home");
    } else if (event.nativeEvent.translationX < -50) {
      setScreen("textField");
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <View style={styles.container}>
          {screen === "home" ? <HomeScreen /> : <ItemsList />}
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
