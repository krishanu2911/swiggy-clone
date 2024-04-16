import { Image, Text, TouchableOpacity, View } from "react-native";
import { dish3, heart, star } from "../constant/imgUrl";

const RestaurantsCard = () => {
  return (
    <TouchableOpacity className="w-full mb-4 flex flex-row">
      <View className=" rounded-xl shadow-lg overflow-hidden w-[40%] relative">
        <Image
          source={{ uri: dish3 }}
          className="w-full h-48"
          resizeMode="cover"
        />
        <Image
          source={{ uri: heart }}
          resizeMode="contain"
          className="w-7 h-7 absolute top-4 right-4"
        />
        <View className="absolute bottom-4 left-2">
          <Text className="text-xl font-bold text-white">40% OFF</Text>
          <Text className="text-base font-bold text-white">UPTO Rs100</Text>
        </View>
      </View>
      <View className="flex-1 flex justify-center pl-2">
        <Text className=" text-lg font-extrabold text-black">
          THE BLUEBERRY PIE
        </Text>
        <View className="flex flex-row items-center">
          <Image source={{uri: star}} resizeMode="contain" className="w-4 h-4 mr-1" />
          <Text className=" text-sm text-black">4.5 (1K+) ; 20-30 mins</Text>
        </View>
        <Text className=" text-gray-600 text-sm">Desserts,Turkish, Fast food Sector 5 , Noida</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantsCard;
