import React, {Component} from 'react'
import SplashScreen from './screens/SplashScreen';
import SignIn from './screens/SignIn';
import TabScreen from './screens/Inside/TabScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component{
  render() {
    return(
        <AppContainer />
    )
  }
}

const RootStack = createStackNavigator(
  {
    Splash: SplashScreen,
    Sign_In: SignIn,
    TabScreen: TabScreen
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(RootStack);