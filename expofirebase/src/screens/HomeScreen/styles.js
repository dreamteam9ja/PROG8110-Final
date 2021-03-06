import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    flexDirection: "row",
    height: 80,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#788eec",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  listContainer: {
    marginTop: 20,
    padding: 20,
  },
  entityContainer: {
    marginTop: 16,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  entityText: {
    fontSize: 20,
    color: "#333333",
  },
  date: {
    display: "flex",
    gap: 20 + "em",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  dateInfo: {
    display: "flex",
    placeItems: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    top: 0,
  },
  containerStyle: {
    flex: 1,
  },

  scrollViewStyle: {
    flex: 1,

    padding: 15,

    justifyContent: "center",
  },

  headingStyle: {
    fontSize: 30,

    textAlign: "center",

    marginBottom: 40,
  },
});
