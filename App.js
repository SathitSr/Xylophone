import React, { useState, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";
const notesMusic = [
  require("./assets/note1.wav"),
  require("./assets/note2.wav"),
  require("./assets/note3.wav"),
  require("./assets/note4.wav"),
  require("./assets/note5.wav"),
  require("./assets/note6.wav"),
  require("./assets/note7.wav"),
];
const App = () => {
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playNote = async (notes) => {
    const { sound } = await Audio.Sound.createAsync(notesMusic[notes - 1]);

    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#FB9431" }}
        onPress={() => playNote(1)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#F73B48" }}
        onPress={() => playNote(2)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#27A2DB" }}
        onPress={() => playNote(3)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#7448AF" }}
        onPress={() => playNote(4)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#84BC44" }}
        onPress={() => playNote(5)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "#802C76" }}
        onPress={() => playNote(6)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "gray" }}
        onPress={() => playNote(7)}
      />
    </View>
  );
};

export default App;
