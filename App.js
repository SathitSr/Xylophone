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
        style={{ flex: 1, backgroundColor: "red" }}
        onPress={() => playNote(1)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "green" }}
        onPress={() => playNote(2)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "blue" }}
        onPress={() => playNote(3)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "pink" }}
        onPress={() => playNote(4)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "yellow" }}
        onPress={() => playNote(5)}
      />
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: "red" }}
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
