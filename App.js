import "react-native-gesture-handler";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/route/MainStack";

export default function App() {
  // const bottomSheetRef = useRef(null);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <KeyboardAvoidingView className="flex-1">
              <MainStack />
              {/* <SafeAreaView className=" flex-1 bg-yellow-400">
                <StatusBar style="auto" />
                <TouchableOpacity
                  onPress={() => bottomSheetRef.current?.present()}
                >
                  <Text className=" text-yellow-300">Open sheet</Text>
                </TouchableOpacity>
                <BottomSheetModal
                  // keyboardBehavior="fillParent"
                  // keyboardBehavior='extend'
                  // backdropComponent={() => (
                  //   <BottomSheetBackdrop
                  //     // onPress={() => bottomSheetRef.current?.close()}
                  //     // opacity={0.5}
                  //   />
                  // )}
                  backdropComponent={(props) => (
                    <BottomSheetBackdrop
                      {...props}
                      disappearsOnIndex={-1}
                      appearsOnIndex={0}
                      onPress={() => bottomSheetRef.current?.close()}
                    />
                  )}
                  keyboardBehavior="interactive"
                  ref={bottomSheetRef}
                  snapPoints={["25%"]}
                >
                  <BottomSheetView style={{ backgroundColor: "red", flex: 1 }}>
                    <BottomSheetTextInput
                      onBlur={() => bottomSheetRef.current?.snapToIndex(0)}
                      className="bg-red-400"
                      placeholder="hello"
                    />

                    <TouchableOpacity
                      onPress={() => bottomSheetRef.current?.close()}
                    >
                      <Text className=" text-yellow-300">Close sheet</Text>
                    </TouchableOpacity>
                  </BottomSheetView>
                </BottomSheetModal>
              </SafeAreaView> */}
            </KeyboardAvoidingView>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
