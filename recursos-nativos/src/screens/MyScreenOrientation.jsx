import * as ScreenOrientation from "expo-screen-orientation";
import { View, Button, StyleSheet, ScrollView } from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

import styles from "../utils/style";

function Orientacao({ navigation }) {
  const [Color, setColor] = useState('');


  async function defaultOrientation(e) {
    if (e === 'DEFAULT' ){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT
    );setColor('rgb(255, 0, 0)');
  } else if (e === 'UP'){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );setColor('rgba(255, 0, 0, 0.7)');
  } else if (e === 'DOWN'){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    );setColor('rgba(255, 0, 0, 0.5)');
  } else if (e === 'LEFT'){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );setColor('rgba(0, 128, 0, 0.8)');
  } else if (e === 'RIGHT'){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );setColor('rgba(0, 128, 0, 0.8)');
  };
    }


  return (
    <ScrollView style={[styles.container, {backgroundColor: Color}]}>
      <View>
        <Header title="Orientação de Tela" />
      </View>

      <View style={styles.btnOrientation}>
        <Button style={styles.btn} title="Default" onPress={() => defaultOrientation('DEFAULT')} />
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
    </ScrollView>
  );
}
export default Orientacao;