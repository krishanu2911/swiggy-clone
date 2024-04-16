import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodScreen from "../screens/home/FoodScreen";
import HomeScreen from "../screens/home/HomeScreen";
import InstamartScreen from "../screens/home/Instamart";
import TabTile from "../components/TabTile";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 12,
          height: 80,
          paddingBottom: 16,
        },
      }}
    >
      <Tab.Screen
        name="Swiggy"
        component={HomeScreen}
        options={({ route }) => ({
          tabBarButton: (props) => {
            return <TabTile tabProps={props} title={route.name} />;
          },
        })}
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarButton: (props) => {
            return <TabTile tabProps={props} title={route.name} />;
          },
        })}
        name="Food"
        component={FoodScreen}
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarButton: (props) => {
            return <TabTile tabProps={props} title={route.name} />;
          },
        })}
        name="Instamart"
        component={InstamartScreen}
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarButton: (props) => {
            return <TabTile tabProps={props} title={route.name} />;
          },
        })}
        name="Dineout"
        component={InstamartScreen}
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarButton: (props) => {
            return <TabTile tabProps={props} title={route.name} />;
          },
        })}
        name="Geine"
        component={InstamartScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
