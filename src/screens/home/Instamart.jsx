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
  coconut,
  downArrow,
  glass,
  instaBanner,
  mic,
  orangeHome,
  panner,
  user,
} from "../../constant/imgUrl";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import InstamartCard from "../../components/InstamartCard";
import CategoryCard from "../../components/CategoryCard";

const InstamartScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView edges={["bottom"]} className="flex-1">
      <StatusBar style="dark" />
      <ScrollView bounces={false} className="flex-1 bg-white">
        {/* header */}

        <View
          style={{ paddingTop: top + 15 }}
          className="w-full px-6 py-4 bg-[#fed196]"
        >
          <View className="w-full flex flex-row items-center">
            <View className="flex-1 flex flex-row items-center">
              {/* <Image
                source={{ uri: orangeHome }}
                resizeMode="contain"
                className="w-4 h-4 mr-2"
              /> */}
              <View className=" px-2 mr-2 bg-[#FD9139] rounded-lg flex items-center justify-center">
                <Text className=" text-2xl text-white font-bold">9</Text>
                <Text className=" text-xs text-white font-semibold">MIN</Text>
              </View>
              <View>
                <View className="flex flex-row items-center ">
                  <Text className=" text-lg font-bold text-black">
                    Shyamal County
                  </Text>
                  <Image
                    source={{ uri: downArrow }}
                    resizeMode="contain"
                    className="w-2 h-2 ml-2"
                  />
                </View>
                <Text className=" text-sm text-gray-600">
                  6th Cross road, Banday Colony.
                </Text>
              </View>
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
        <View>
          <Image
            source={{ uri: instaBanner }}
            resizeMode="cover"
            className="w-full h-[25vh] aspect-auto"
          />
        </View>

        {/* Fresh and homemade */}

        <Text className=" text-lg mt-8 mb-4 font-semibold text-black px-6 ">
          Fresh & Homemade
        </Text>

        <ScrollView
          horizontal={true}
          className="px-6 mb-6"
          showsHorizontalScrollIndicator={false}
        >
          <InstamartCard url={panner} />
          <InstamartCard url={panner} />
          <InstamartCard url={panner} />
          <InstamartCard url={panner} />
          <InstamartCard url={panner} />
        </ScrollView>

        <Text className=" text-lg mt-8 mb-4 font-semibold text-black px-6 ">
          Shop by Category
        </Text>
        <View className="flex flex-row flex-wrap px-6">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </View>

        <Text className=" text-lg mt-8 mb-4 font-semibold text-black px-6 ">
          Offer Deals
        </Text>
        <ScrollView
          horizontal={true}
          className="px-6 mb-6"
          showsHorizontalScrollIndicator={false}
        >
          <InstamartCard url={coconut} offer={true} />
          <InstamartCard url={panner} offer={true} />
          <InstamartCard url={coconut} offer={true} />
          <InstamartCard url={panner} offer={true} />
          <InstamartCard url={coconut} offer={true} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InstamartScreen;
