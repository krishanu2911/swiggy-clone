import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  leftArrow,
  loginBanner,
  message,
  offer,
  smallArrow,
} from "../../constant/imgUrl";

const LoginScreen = () => {
  const bottomSheetRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <StatusBar style="dark" backgroundColor="#FFFFFF" />
      <View className="flex-1 ">
        <View className="w-full  bg-white flex justify-end px-6 py-3">
          <Image
            source={{ uri: leftArrow }}
            className="w-4 h-4"
            resizeMode="contain"
          />
        </View>
        <View className=" w-full bg-[#f3f6fd] pt-6 pb-2 px-6">
          <Image
            source={{ uri: loginBanner }}
            resizeMode="contain"
            className="w-[80%] h-[25vh]"
          />
        </View>
        <View className="w-full p-6 bg-white ">
          <Text className=" text-lg font-semibold text-black">ACCOUNT</Text>
          <Text className=" text-xs  text-gray-400">
            Login/Create Account to manage orders
          </Text>
          <TouchableOpacity
            onPress={() => bottomSheetRef.current?.present()}
            className="py-4 rounded-sm bg-[#FD9139] mb-2 mt-4"
          >
            <Text className=" text-sm text-center font-semibold text-white">
              LOGIN
            </Text>
          </TouchableOpacity>
          <View className="pb-6 border-b border-b-black">
            <Text className="text-xs  text-gray-400">
              By clicking, i accept the
              <Text className="font-semibold text-black">
                Terms & Condition
              </Text>
              & <Text className="font-semibold text-black">Privacy Policy</Text>
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderStyle: "dashed",
              borderBottomColor: "#000000",
            }}
            className="w-full flex flex-row justify-between items-center py-6"
          >
            <View className=" flex flex-row">
              <Image
                source={{ uri: offer }}
                className="w-5 h-5 mr-4 "
                resizeMode="contain"
              />
              <Text className=" text-sm text-black font-semibold">Offers</Text>
            </View>
            <Image
              source={{ uri: smallArrow }}
              resizeMode="contain"
              className="w-3 h-3 rotate-180"
            />
          </View>
          <View className="w-full flex flex-row justify-between items-center pt-6">
            <View className=" flex flex-row">
              <Image
                source={{ uri: message }}
                className="w-5 h-5 mr-4 "
                resizeMode="contain"
              />
              <Text className=" text-sm text-black font-semibold">
                Send Feedback
              </Text>
            </View>
            <Image
              source={{ uri: smallArrow }}
              resizeMode="contain"
              className="w-3 h-3 rotate-180"
            />
          </View>
        </View>
        <Text className=" mt-2 text-xs text-gray-600 text-center">
          App version 5.0.8
        </Text>
        <BottomSheetModal
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              disappearsOnIndex={-1}
              appearsOnIndex={0}
              onPress={() => bottomSheetRef.current?.close()}
              opacity={0.2}
            />
          )}
          keyboardBehavior="interactive"
          ref={bottomSheetRef}
          snapPoints={["40%"]}
        >
          <BottomSheetView style={{ flex: 1 }}>
            <View className="w-full px-6 bg-white ">
              <Text className=" text-lg font-semibold text-black">LOGIN</Text>
              <Text className=" text-xs  text-gray-400">
                Enter your phone number to proceed
              </Text>
              <Text className=" text-xs text-gray-600 mt-4 mb-2">
                PHONE NUMBER
              </Text>
              <View className="flex flex-row items-center border-b border-b-[#FD9139]">
                <Text className=" text-sm text-black mr-1">+91</Text>
                <BottomSheetTextInput
                  value={phoneNumber}
                  maxLength={10}
                  onChangeText={(number) => setPhoneNumber(number)}
                  style={{ width: "100%" }}
                  onBlur={() => bottomSheetRef.current?.snapToIndex(0)}
                  className=" text-sm text-black w-full"
                  placeholder=""
                  textContentType="telephoneNumber"
                  cursorColor="#FD9139"
                />
              </View>
              <TouchableOpacity
                onPress={() => bottomSheetRef.current?.present()}
                className={`py-3 rounded-sm ${
                  phoneNumber.length >= 10 ? "bg-[#FD9139]" : " bg-[#FD9139]/60"
                } mb-2 mt-4`}
                disabled={phoneNumber.length < 10}
              >
                <Text className=" text-sm text-center font-semibold text-white">
                  CONTINUE
                </Text>
              </TouchableOpacity>
              <View className="">
                <Text className="text-xs  text-gray-400">
                  By clicking, i accept the
                  <Text className="font-semibold text-black">
                    Terms & Condition
                  </Text>
                  &
                  <Text className="font-semibold text-black">
                    Privacy Policy
                  </Text>
                </Text>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
