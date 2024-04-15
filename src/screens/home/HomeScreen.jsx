import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  cake,
  dineoutImg,
  downArrow,
  genieBox,
  glass,
  insta1,
  mic,
  orangeHome,
  user,
} from "../../constant/imgUrl";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView  edges={["top", "bottom"]} className="flex-1">
      <StatusBar style="dark" backgroundColor="#FFFFFF" />
      <ScrollView bounces={false} className="flex-1 bg-[#d9d9d91a]">
        {/* header */}

        <View className="w-full px-6 py-4 bg-white">
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
          <View className="flex flex-row items-center border border-[#9D9D9D]/30 rounded-lg px-3 py-4 my-3">
            <TextInput
              placeholder="Search for Bread "
              placeholderTextColor={"#9D9D9D"}
              className="flex-1 text-gray-800"
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

        <View className=" flex-1  px-6 pt-4  relative">
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            // Background Linear Gradient
            colors={["#d9d9d91a", "#d9d9d91a", "#FFFFFF"]}
            className=" absolute top-0 left-0 right-0 h-[40vh]"
          />
          <View className="flex flex-row w-full">
            <View className="flex-1 mr-3 h-40 rounded-xl bg-white shadow-lg py-2 pl-3 relative overflow-hidden">
              <Text className="text-base text-gray-900 font-bold">FOOD DELIVERY</Text>
              <Text className=" text-xs text-gray-500 font-medium">
                FROM RESTAURANTS
              </Text>
              {/* <View> */}
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                colors={["#fca65e66", "transparent", "transparent"]}
                className=" rounded-xl p-1 pl-2 mt-2"
              >
                <Text className=" text-xs text-[#FD9139] font-bold">
                  UPTO 60% OFF
                </Text>
              </LinearGradient>
              {/* </View> */}
              <Image
                source={{ uri: cake }}
                resizeMode="contain"
                className=" absolute bottom-0 -right-2 w-[60%] h-[60%]"
              />
            </View>
            <View className="flex-1  h-40 rounded-xl bg-white shadow-lg py-2 pl-3 relative overflow-hidden">
              <Text className="text-base text-gray-900 font-bold">INSTAMART</Text>
              <Text className=" text-xs text-gray-500 font-medium">
                INSTANT GROCERY
              </Text>
              {/* <View> */}
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                colors={["#fca65e66", "transparent", "transparent"]}
                className=" rounded-xl p-1 pl-2 mt-2"
              >
                <Text className=" text-xs text-[#FD9139] font-bold">
                  FREE DELIVERY
                </Text>
              </LinearGradient>
              {/* </View> */}
              <Image
                source={{ uri: insta1 }}
                resizeMode="contain"
                className=" absolute bottom-0 -right-2 w-[70%] h-[70%]"
              />
            </View>
          </View>
          <View className="flex flex-row w-full mt-3">
            <View className="flex-1 mr-3 h-40 rounded-xl bg-white shadow-lg py-2 pl-3 relative overflow-hidden">
              <Text className="text-base text-gray-900 font-bold">DINEOUT</Text>
              <Text className=" text-xs text-gray-500 font-medium">
                EAT OUT & SAVE MORE
              </Text>
              {/* <View> */}
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                colors={["#fca65e66", "transparent", "transparent"]}
                className=" rounded-xl p-1 pl-2 mt-2"
              >
                <Text className=" text-xs text-[#FD9139] font-bold">
                  UPTO 50% OFF
                </Text>
              </LinearGradient>
              {/* </View> */}
              <Image
                source={{ uri: dineoutImg }}
                resizeMode="contain"
                className=" absolute bottom-0 -right-4 w-[70%] h-[70%]"
              />
            </View>
            <View className="flex-1 h-40 rounded-xl bg-white shadow-lg py-2 pl-3 relative overflow-hidden">
              <Text className="text-base  text-gray-900 font-bold">INSTAMART</Text>
              <Text className=" text-xs text-gray-500 font-medium">
                INSTANT GROCERY
              </Text>
              {/* <View> */}
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                colors={["#fca65e66", "transparent", "transparent"]}
                className=" rounded-xl p-1 pl-2 mt-2"
              >
                <Text className=" text-xs text-[#FD9139] font-bold">
                  UPTO 60% OFF
                </Text>
              </LinearGradient>
              {/* </View> */}
              <Image
                source={{ uri: insta1 }}
                resizeMode="contain"
                className=" absolute bottom-0 -right-2 w-[70%] h-[70%]"
              />
            </View>
          </View>
          <View className="flex-1 h-16 py-2 pl-3 rounded-xl bg-white shadow-lg my-3 relative">
            <Text className="text-base text-gray-900 font-bold">GENIE</Text>
            <Text className=" text-xs text-gray-500 font-medium">
              PICK-UP & DROP
            </Text>
            <Image
                source={{ uri: genieBox }}
                resizeMode="contain"
                className=" absolute bottom-0 right-0 w-14 h-14"
              />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
