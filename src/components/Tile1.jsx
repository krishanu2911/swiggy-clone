import { Image, Text, View } from "react-native";

const Tile1 = ({ title, url }) => {
  return (
    <View className="rounded-2xl mr-3 bg-white shadow flex items-center border border-gray-300 justify-between w-20 h-24 pt-2 relative ">
      <Text className=" text-xs font-semibold text-gray-600 text-center px-2">
        {title}
      </Text>
      <Image
        source={{ uri: url }}
        resizeMode="contain"
        className="  w-16 h-16 absolute bottom-0"
      />
    </View>
  );
};

export default Tile1;
