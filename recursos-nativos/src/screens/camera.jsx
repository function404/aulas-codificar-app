import React, { useState, useEffect } from "react";

import { View, Button, Image, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

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
});

const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const takePhoto = async () => {
      if (camera) {
        const photoData = await camera.takePictureAsync();
        setPhoto(photoData.uri);
      }
    };
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
        <View style={styles.container}>
        <View>
          <Header title="Câmera" />
        </View>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={(ref) => setCamera(ref)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <Button title="Take Photo" onPress={takePhoto} />
          </View>
        </Camera>
        {photo && <Image source={{ uri: photo }} style={{ flex: 1 }} />}
      </View>
    );
  };
  
  export default CameraScreen;
