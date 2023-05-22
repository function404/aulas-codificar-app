import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import * as Battery from "expo-battery";

import Header from "../components/header";
import Footer from "../components/footer";

import styles from '../utils/style';

export default function BatteryInfo({ navigation }) {
  const [batteryLevel, setBatteryLevel] = useState();
  const [batteryStatus, setBatteryStatus] = useState();
  const [fundo, setFundo] = useState("");

  const sdasdasda = () => {
    if (batteryLevel < 20) {
      setFundo("red");
      setBatteryStatus("Bateria Fraca");
    } else if (batteryLevel < 50) {
      setFundo("orange");
      setBatteryStatus("Bateria Média");
    } else if (batteryLevel < 80) {
      setFundo("yellow");
      setBatteryStatus("Bateria Boa");
    } else {
      setFundo("green");
      setBatteryStatus("Bateria Cheia");
    }
  };

  async function getBatteryLevel() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    setBatteryLevel(Math.round(batteryLevel * 100));
  }

  async function atualizarTudo() {
    getBatteryLevel();
  }

  useEffect(() => {
    getBatteryLevel();
    sdasdasda();
  }, [batteryLevel]);

  return (
    <View style={[styles.container, { backgroundColor: fundo }]}>
      <Header title="Battery" />
      <View style={styles.center}>
        <Text>{batteryLevel}%</Text>
        <Button title="Atualizar" onPress={atualizarTudo} />
      </View>
      <Footer text='Sair' />
    </View>
  );
}
