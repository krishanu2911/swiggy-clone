import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import OTPInput from "../../components/OTPInput";
import { leftArrow, mobile } from "../../constant/imgUrl";
import { useNavigation } from "@react-navigation/native";

const VerifyScreen = ({}) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <SafeAreaView edges={["bottom"]} className="flex-1">
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <View className="flex-1 ">
        <View className="bg-[#f3f6fd] w-full h-[20vh] flex flex-row justify-start relative px-6 overflow-hidden">
          <View style={{ paddingTop: top }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={{ uri: leftArrow }}
                className="w-4 h-4 mb-6"
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text className=" text-base font-bold text-gray-600 mb-2">
              VERIFY DETAILS
            </Text>
            <Text className=" text-sm text-gray-400">
              OPT sent to 91xxxxxxxx
            </Text>
          </View>
          <Image
            source={{ uri: mobile }}
            resizeMode="contain"
            className=" absolute bottom-0 w-[20%] h-[20vh] right-12"
          />
        </View>
        <View className="px-6 bg-white flex-1 pt-8">
          <Text className=" text-xs text-gray-600">ENTER OTP</Text>
          <OTPInput />
          <Text className=" text-xs text-gray-600 mt-6 mb-10">
            Didn't receive the OTP?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "Dashboard" }],
              });
            }}
            className="py-4 rounded-sm bg-[#FD9139] mb-2 "
          >
            <Text className=" text-sm text-center font-semibold text-white">
              VERIFY AND PROCEED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyScreen;
