import React from 'react';
import {Icon} from 'native-base';
import Feed from './Feed';
import Friends from './Friends';
import Messaging from './Messaging';
import Notifikasi from './Notifikasi';
import Profile from './Profile';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import {ColorStyles} from '../../styles/Styles';

const TabScreen = createBottomTabNavigator({
  Feed: { screen: Feed },
  Friends: { screen: Friends },
  Messaging: { screen: Messaging },
  Notifikasi: { screen: Notifikasi },
  Profile: { screen: Profile },
  },
  
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: ColorStyles.lightBlue,
      inactiveTintColor: ColorStyles.background,
    },
  });

export default createAppContainer(TabScreen);