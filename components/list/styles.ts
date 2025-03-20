import { StyleSheet } from "react-native";

export const itemsListStyles = StyleSheet.create({
  list: {
    flex: 1,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addBtn: {
    backgroundColor: "#16C1E8",
    marginRight: 10,
  },
  clearBtn: {
    backgroundColor: "#EA5151",
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
  textInput: {
    borderWidth: 1,
    width: 300,
  },
});
