import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Video } from "expo-av";
import React, { useRef, useState } from "react";

export default function App() {
  const video = useRef(null);
  const video2 = useRef(null);

  const [status, setStatus] = useState({});
  const [status1, setStatus1] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.button}>
        <Button
          title="Play from 5s"
          onPress={() => video.current.playFromPositionAsync(5000)}
        />
        <Button
          title={status.isLooping ? "Set to not loop" : "Set to Loop"}
          onPress={() => video.current.setIsLoopingAsync(!status)}
        />
      </View>
      <Video
        ref={video2}
        style={styles.video}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.button}>
        <Button
          title="Play from 5s"
          onPress={() => video.current.playFromPositionAsync(5000)}
        />
        <Button
          title={status1.isLooping ? "Set to not loop" : "Set to Loop"}
          onPress={() => video.current.setIsLoopingAsync(!status1)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
  button: {
    margin: 16,
  },
});
