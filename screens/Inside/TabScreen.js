import Feed from './Feed';
import Friends from './Friends';
import Messaging from './Messaging';
import Notifikasi from './Notifikasi';
import Profile from './Profile';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const TabScreen = createBottomTabNavigator({
  Feed: { screen: Feed },
  Friends: { screen: Friends },
  Messaging: { screen: Messaging },
  Notifikasi: { screen: Notifikasi },
  Profile: { screen: Profile },
});

export default createAppContainer(TabScreen);