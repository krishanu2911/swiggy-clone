import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  dineout,
  food,
  foodSelected,
  geine,
  instamart,
  instamartSelected,
  swiggy,
  swiggySelected,
} from "../constant/imgUrl";

const tabIconsData = {
  Swiggy: {
    icon: swiggy,
    iconSelected: swiggySelected,
  },
  Food: {
    icon: food,
    iconSelected: foodSelected,
  },
  Instamart: {
    icon: instamart,
    iconSelected: instamartSelected,
  },
  Dineout: {
    icon: dineout,
    iconSelected: dineout,
  },
  Geine: {
    icon: geine,
    iconSelected: geine,
  },
};

const TabTile = ({ tabProps, title }) => {
  return (
    <TouchableOpacity
      onPress={tabProps.onPress}
      className={`flex flex-1 items-center justify-center py-2 `}
    >
      <Image
        source={{
          uri: tabProps.accessibilityState?.selected
            ? tabIconsData[title].iconSelected
            : tabIconsData[title].icon,
        }}
        resizeMode="contain"
        className=" w-6 h-6 mb-1"
      />
      <Text
        className={`${
          tabProps.accessibilityState?.selected
            ? "text-gray-600"
            : "text-gray-400"
        } font-semibold text-xs`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TabTile;
