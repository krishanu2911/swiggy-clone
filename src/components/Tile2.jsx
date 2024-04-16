import { Image, Text, View } from "react-native";
import { dish1 } from "../constant/imgUrl";

const Tile2 = ({title, url}) => {
  return (
    <View className="flex mr-2 mb-2 items-center justify-center">
      <Image
        source={{ uri: url }}
        resizeMode="contain"
        className=" w-24 h-24"
      />
      <Text className=" text-sm">{title}</Text>
    </View>
  );
};

export default Tile2;
