import { Image, Text, TouchableOpacity, View } from "react-native";
import { offerTag } from "../constant/imgUrl";

const InstamartCard = ({ url, offer }) => {
  return (
    <View className=" w-36 mr-4">
      <View className="rounded-xl overflow-hidden relative">
        <Image
          source={{ uri: url }}
          resizeMode="cover"
          className=" w-36 h-32"
        />
        {offer && (
          <Image
            source={{ uri: offerTag }}
            resizeMode="contain"
            className="w-10 h-10 absolute top-0 left-0"
          />
        )}
      </View>
      <Text className=" text-sm text-gray-400 mt-2">The Punjab Dairy</Text>
      <Text className=" text-base text-black font-bold">
        Fresh Malai Panner
      </Text>
      <Text className="text-sm text-gray-400 mt-2">200g</Text>
      <View className="w-full flex flex-row justify-between mt-1 items-center">
        <Text className="text-base text-black font-bold">129</Text>
        <TouchableOpacity className="px-6 py-2 rounded-lg border border-gray-400 shadow-lg flex items-center justify-center">
          <Text className=" text-base text-green-700 font-bold">ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InstamartCard;
