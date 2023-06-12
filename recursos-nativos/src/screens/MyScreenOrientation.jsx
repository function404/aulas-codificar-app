import * as ScreenOrientation from "expo-screen-orientation";
import { View, Button, StyleSheet } from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  header: {
    paddingTop: 30,
    backgroundColor: "#606",
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  headerTextStyle: {
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  btnOrientation: {
    margin: 25,
    marginBottom: 0,
  }
});

export default function Orientacao({ navigation }) {

  async function defaultOrientation(e) {
    if (e === 'DEFAULT' ){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT
    )} else if (e === 'UP'){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    )} else if (e === 'DOWN'){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    )} else if (e === 'LEFT'){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    )} else if (e === 'RIGHT'){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    )};
    }

  return (
    <View style={styles.container}>
      <View>
        <Header title="Orientação de Tela" />
      </View>

      <View style={styles.btnOrientation}>
        <Button title="Default" onPress={() => defaultOrientation('DEFAULT')} />
      </View>
      <View style={styles.btnOrientation}>
        <Button title="UP" onPress={() => defaultOrientation('UP')} />
      </View>
      <View style={styles.btnOrientation}>
        <Button title="Down" onPress={() => defaultOrientation('DOWN')} />
      </View>
      <View style={styles.btnOrientation}>
        <Button title="Left" onPress={() => defaultOrientation('LEFT')} />
      </View>
      <View style={styles.btnOrientation}>
        <Button title="Right" onPress={() => defaultOrientation('RIGHT')} />
      </View>

      <View>
        <Footer />
      </View>
    </View>
  );
}