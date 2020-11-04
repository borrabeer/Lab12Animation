import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Spring from "../screens/Spring";
import Sequence from "../screens/Sequence";
import Parallel from "../screens/Parallel";
import { Ionicons } from '@expo/vector-icons';

const MainNavigator = createBottomTabNavigator({
  Spring: {
    screen: Spring,
    navigationOptions: {
      tabBarIcon: () => {
        return <Ionicons name="ios-airplane" size={24} color="black" />;
      },
    },
  },
  Sequence: {
      screen: Sequence,
      navigationOptions: {
          tabBarIcon: () => {
              return <Ionicons name="ios-albums" size={24} color="black" />;
          }
      }
  },
  Parallel: {
    screen: Parallel,
    navigationOptions: {
        tabBarIcon: () => {
            return <Ionicons name="ios-alert" size={24} color="black" />;
        }
    }
}
});

export default createAppContainer(MainNavigator);
