import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodScreen from "../screens/home/FoodScreen";
import HomeScreen from "../screens/home/HomeScreen";
import InstamartScreen from "../screens/home/Instamart";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="Instamart" component={InstamartScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
