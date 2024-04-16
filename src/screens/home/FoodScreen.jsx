import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  dish1,
  dish2,
  downArrow,
  glass,
  glassBoy,
  mic,
  noddles,
  offerBox,
  orangeHome,
  user,
} from "../../constant/imgUrl";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Tile1 from "../../components/Tile1";
import Tile2 from "../../components/Tile2";
import RestaurantsCard from "../../components/RestaurantsCard";

const FoodScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView edges={["bottom"]} className="flex-1">
      <StatusBar style="dark" />
      <ScrollView bounces={false} className="flex-1 bg-white">
        {/* header */}

        <View
          style={{ paddingTop: top + 15 }}
          className="w-full px-6 py-4 bg-[#ffd7b566]"
        >
          <View className="w-full flex flex-row items-center">
            <View className="flex-1">
              <View className="flex flex-row items-center ">
                <Image
                  source={{ uri: orangeHome }}
                  resizeMode="contain"
                  className="w-4 h-4 mr-2"
                />
                <Text className=" text-lg font-bold text-black">
                  Shyamal County
                </Text>
                <Image
                  source={{ uri: downArrow }}
                  resizeMode="contain"
                  className="w-2 h-2 ml-2"
                />
              </View>
              <Text className=" text-sm text-gray-400">
                6th Cross road, Banday Colony.
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Image
                source={{ uri: user }}
                resizeMode="contain"
                className="w-8 h-8"
              />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row items-center border border-[#9D9D9D]/30 rounded-lg px-3 py-4 my-3 bg-white">
            <TextInput
              placeholder="Search for Bread "
              placeholderTextColor={"#9D9D9D"}
              className="flex-1 text-gray-800 text-sm"
            />
            <Image
              source={{ uri: glass }}
              resizeMode="contain"
              className="w-5 h-5"
            />
            <View className="w-[1px] h-5 bg-gray-400 mx-3" />
            <Image
              source={{ uri: mic }}
              resizeMode="contain"
              className="w-5 h-5"
            />
          </View>
        </View>

        {/* section */}

        <View className=" pt-10 relative">
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            className="pl-6 z-20 "
          >
            <Tile1 title="OFFER ZONE" url={offerBox} />
            <Tile1 title="GOURMET DELIGHT" url={noddles} />
            <Tile1 title="POCKET HERO" url={glassBoy} />
            <Tile1 title="OFFER ZONE" url={offerBox} />
            <Tile1 title="GOURMET DELIGHT" url={noddles} />
            <Tile1 title="POCKET HERO" url={glassBoy} />
          </ScrollView>
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={["#FFFFFF", "#FFFFFF", "#ffd7b566"]}
            className=" absolute top-0 left-0 right-0 h-[20vh] z-10"
          />
        </View>

        {/* what on your mind */}

        <View className="mt-8">
          <View className="px-6 flex mb-4 flex-row items-center">
            <Text className=" text-sm ">WHAT'S ON YOUR MIND?</Text>
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              colors={["#808080", "#808080", "#FFFFFF", "#FFFFFF"]}
              className=" h-[1.5px] flex-1 ml-2"
            />
          </View>
          <ScrollView
            className="pl-6"
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            <View>
              <Tile2 title="Burger" url={dish1} />
              <Tile2 title="Noddle" url={dish2} />
            </View>
            <View className="flex flex-col-reverse">
              <Tile2 title="Burger" url={dish1} />
              <Tile2 title="Noddle" url={dish2} />
            </View>
            <View>
              <Tile2 title="Burger" url={dish1} />
              <Tile2 title="Noddle" url={dish2} />
            </View>
            <View className="flex flex-col-reverse">
              <Tile2 title="Burger" url={dish1} />
              <Tile2 title="Noddle" url={dish2} />
            </View>
          </ScrollView>
        </View>

        {/* restaurants */}
        <Text className=" text-lg mt-8 mb-4 font-semibold text-black px-6 ">
          155 restaurants to explore
        </Text>
        <View className="w-full px-6">
          <RestaurantsCard />
          <RestaurantsCard />
          <RestaurantsCard />
          <RestaurantsCard />
          <RestaurantsCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodScreen;
