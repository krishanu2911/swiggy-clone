import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className=" flex-1 bg-red-500">
      <StatusBar style="auto" />
      <Text className=" text-yellow-300">
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}
