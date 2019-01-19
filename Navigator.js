import { createStackNavigator, createAppContainer } from "react-navigation";
import FlexBox from "./src/screens/Flexbox.js";

const AppNavigator = createStackNavigator({
  Home: {
    screen: FlexBox
  }
});

export default createAppContainer(AppNavigator);