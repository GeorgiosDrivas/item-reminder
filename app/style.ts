import { StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 60,
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
});

export const listStyles = StyleSheet.create({
  item: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
