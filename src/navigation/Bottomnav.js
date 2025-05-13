import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import HomeScreen from '../screen/home/Home';
import SearchScreen from '../screen/search/Search';
import MyjobScreen from '../screen/savedJob/SavedJob';
import ProfileScreen from '../screen/profile/Profile';


const Tab = createBottomTabNavigator();

const Notification = () => <View><Text>Notification</Text></View>;
const Profile = () => <View><Text>Profile</Text></View>;

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'My Jobs':
              iconName = 'bookmark';
              break;
            case 'Notification':
              iconName = 'bell';
              break;
            case 'Profile':
              iconName = 'user';
              break;
            default:
              iconName = 'circle';
          }

          return (
            <Icon
              name={iconName}
              size={responsiveFontSize(3)} 
              color={focused ? '#1B1D3B' : '#B4B4B4'}
              style={{ marginTop: responsiveHeight(0.5) }}
            />
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              fontSize: responsiveFontSize(1.4),
              color: focused ? 'rgba(32, 41, 84, 1)' : '#B4B4B4',
              marginBottom: responsiveHeight(0.5),
              fontFamily: 'Poppins-Regular',
            }}
          >
            {route.name}
          </Text>
        ),
        tabBarStyle: {
          height: responsiveHeight(9),
          borderTopLeftRadius: responsiveWidth(5),
          borderTopRightRadius: responsiveWidth(5),
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="My Jobs" component={MyjobScreen} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
