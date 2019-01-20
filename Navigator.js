import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import FlexBox from './src/screens/Flexbox';
import Walkthrough from './src/screens/Walkthrough';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import SignInScreen from './src/screens/SignInScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: FlexBox,
  },
  Intro: { screen: Walkthrough }
});


const AppStack = createStackNavigator({ Home: FlexBox });
const AuthStack = createStackNavigator({ Intro: Walkthrough, SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

// export default createAppContainer(AppNavigator);
