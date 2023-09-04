import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  center: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: "center",
  },
  infoBox: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  TouchableOpacitybutton: {
    backgroundColor: "#2196F3",
    padding: 6,
    alignItems: "center",
  },
  text:{
    color: '#fff',
    fontSize: 17,
    textTransform: 'uppercase',
  }
});

export default styles;
