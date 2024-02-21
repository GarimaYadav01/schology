// Bottomnavigation.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../screen/home/ProfileScreen';
import SettingsScreen from '../screen/home/SettingsScreen';
import { Dimensions } from 'react-native';
import HomeScreen from '../screen/home/HomeScreen';
import Profile from '../screen/auth/Profile';
import LoginScreen from '../screen/auth/LoginScreen';

const { width, height } = Dimensions.get("screen")


const Tab = createBottomTabNavigator();

const Bottomnavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarStyle: {
                height: height * 0.08,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="profile" component={Profile} options={{ headerShown: false }} />
            <Tab.Screen name="Loginscreen" component={LoginScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default Bottomnavigation;
