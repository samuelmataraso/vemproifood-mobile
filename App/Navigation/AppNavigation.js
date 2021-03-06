import React from 'react';
import { Platform } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import { Colors } from '../Themes';

import LoginScreen from '../Containers/LoginScreen';
import WeatherScreen from '../Containers/WeatherScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import WeatherDetailScreen from '../Containers/WeatherDetailScreen';
import AuthLoadingScreen from '../Containers/AuthLoadingScreen';

import styles from './Styles/NavigationStyles';

const TabNav = TabNavigator(
	{
		WeatherScreenTab: {
			screen: WeatherScreen,
			navigationOptions: {
				headerStyle: styles.headerStyle
			}
		},
		ProfilecreenTab: {
			screen: ProfileScreen,
			navigationOptions: {
				headerStyle: styles.headerStyle
			}
		}
	},
	{
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
		initialRouteName: 'WeatherScreenTab',
		tabBarOptions: {
			showLabel: true,
			showIcon: true,
			style: {
				backgroundColor: '#fff'
			},
			tabStyle: {
				flex: 1
			},
			labelStyle: {
				fontSize: 12,
				color: '#c1c1c1',
				paddingBottom: 3
			},
			indicatorStyle: {
				backgroundColor: 'transparent'
			}
		}
	}
);

const AppNavigation = StackNavigator(
	{
		TabRoot: { screen: TabNav },
		Auth: { screen: AuthLoadingScreen },
		LoginScreen: { screen: LoginScreen },
		WeatherDetailScreen: { screen: WeatherDetailScreen }
	},
	{
		headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
		initialRouteName: 'Auth',
		/* The header config from HomeScreen is now here */
		navigationOptions: {
			headerStyle: {
				backgroundColor: Colors.tomatoRed
			},
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default AppNavigation;
