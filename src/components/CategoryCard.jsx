import { Image, Text, View } from "react-native";
import { vegetable } from "../constant/imgUrl";

const CategoryCard = () => {
  return (
    <View className="mr-4 mb-4 w-24">
      <View className=" w-24 h-24 flex items-center justify-end rounded-xl bg-[#f1f4f9]">
        <Image
          source={{ uri: vegetable }}
          resizeMode="contain"
          className=" w-24 h-24"
        />
      </View>
      <Text className=" text-sm text-gray-600 text-center">
        Fresh Vegetables
      </Text>
    </View>
  );
};

export default CategoryCard;

