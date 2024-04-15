import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { Text, TouchableOpacity, View } from "react-native";

const LoginModal = ({ref}) => {
  return (
    <View className="w-full px-6 bg-white ">
      <Text className=" text-lg font-semibold text-black">LOGIN</Text>
      <Text className=" text-xs  text-gray-400">
        Enter your phone number to proceed
      </Text>
      <Text className=" text-xs text-gray-600 mt-4 mb-2">PHONE NUMBER</Text>
      <View className="flex flex-row items-center border-b border-b-[#FD9139]">
        <Text className=" text-sm text-black mr-1">+91</Text>
        <BottomSheetTextInput
          style={{ width: "100%" }}
          onBlur={() => ref.current?.snapToIndex(0)}
          className=" text-sm text-black w-full"
          placeholder=""
          textContentType="telephoneNumber"
          cursorColor="#FD9139"
        />
      </View>
      <TouchableOpacity
        onPress={() => bottomSheetRef.current?.present()}
        className="py-3 rounded-sm bg-[#FD9139] mb-2 mt-4"
        disabled={true}
      >
        <Text className=" text-sm text-center font-semibold text-white">
          CONTINUE
        </Text>
      </TouchableOpacity>
      <View className="">
        <Text className="text-xs  text-gray-400">
          By clicking, i accept the
          <Text className="font-semibold text-black">Terms & Condition</Text>&
          <Text className="font-semibold text-black">Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginModal;
