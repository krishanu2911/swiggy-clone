import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import LoginScreen from "../screens/auth/loginScreen";
import VerifyScreen from "../screens/auth/VerifyScreen";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={BottomTab} />
      <Stack.Screen name="verify" component={VerifyScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
