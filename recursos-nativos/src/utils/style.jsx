import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
  },
  btnOrientation: {
    margin: 25,
    marginBottom: 0,
  },
  infoBox: {
    marginTop: 15,
    marginHorizontal: 15,
},
// CAMERA
buttonContainer: {
  backgroundColor: 'transparent',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  marginBottom: 20,
},
button: {
  flex: 0.3,
  alignSelf: 'flex-end',
  alignItems: 'center',
},
text: {
  fontSize: 18,
  color: 'black',
},

// LOCALIZATION
map:{
  width: '100%',
  height: '100%',
}

});

export default styles;
