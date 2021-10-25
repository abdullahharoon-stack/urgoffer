import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_first_page from "./pages/Page_first_page/Page_first_page.js";
import Page_Home_2 from "./pages/Page_Home_2/Page_Home_2.js";
import Page_iPhone_11_Pro___X___15 from "./pages/Page_iPhone_11_Pro___X___15/Page_iPhone_11_Pro___X___15.js";
import Page_Home_2_2 from "./pages/Page_Home_2_2/Page_Home_2_2.js";
import Page_Home_10 from "./pages/Page_Home_10/Page_Home_10.js";
import Page_Home_3 from "./pages/Page_Home_3/Page_Home_3.js";
import Page_Home from "./pages/Page_Home/Page_Home.js";
import Page_log_in from "./pages/Page_log_in/Page_log_in.js";
import Page_Splash from "./pages/Page_Splash/Page_Splash.js";
import Page_Splash_2 from "./pages/Page_Splash_2/Page_Splash_2.js";
const Tab = createBottomTabNavigator();
const Page_first_pageStackNavigator = createStackNavigator();
const ScreenForPage_first_page = () => {
	return (
		<Page_first_pageStackNavigator.Navigator>
			<Page_first_pageStackNavigator.Screen
				name = "Page_first_page"
				component = {Page_first_page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_first_pageStackNavigator.Navigator>
	)
};
const Page_Home_2StackNavigator = createStackNavigator();
const ScreenForPage_Home_2 = () => {
	return (
		<Page_Home_2StackNavigator.Navigator>
			<Page_Home_2StackNavigator.Screen
				name = "Page_Home_2"
				component = {Page_Home_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Home_2StackNavigator.Navigator>
	)
};
const Page_iPhone_11_Pro___X___15StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_11_Pro___X___15 = () => {
	return (
		<Page_iPhone_11_Pro___X___15StackNavigator.Navigator>
			<Page_iPhone_11_Pro___X___15StackNavigator.Screen
				name = "Page_iPhone_11_Pro___X___15"
				component = {Page_iPhone_11_Pro___X___15}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_11_Pro___X___15StackNavigator.Navigator>
	)
};
const Page_Home_2_2StackNavigator = createStackNavigator();
const ScreenForPage_Home_2_2 = () => {
	return (
		<Page_Home_2_2StackNavigator.Navigator>
			<Page_Home_2_2StackNavigator.Screen
				name = "Page_Home_2_2"
				component = {Page_Home_2_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Home_2_2StackNavigator.Navigator>
	)
};
const Page_Home_10StackNavigator = createStackNavigator();
const ScreenForPage_Home_10 = () => {
	return (
		<Page_Home_10StackNavigator.Navigator>
			<Page_Home_10StackNavigator.Screen
				name = "Page_Home_10"
				component = {Page_Home_10}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Home_10StackNavigator.Navigator>
	)
};
const Page_Home_3StackNavigator = createStackNavigator();
const ScreenForPage_Home_3 = () => {
	return (
		<Page_Home_3StackNavigator.Navigator>
			<Page_Home_3StackNavigator.Screen
				name = "Page_Home_3"
				component = {Page_Home_3}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Home_3StackNavigator.Navigator>
	)
};
const Page_HomeStackNavigator = createStackNavigator();
const ScreenForPage_Home = () => {
	return (
		<Page_HomeStackNavigator.Navigator>
			<Page_HomeStackNavigator.Screen
				name = "Page_Home"
				component = {Page_Home}
				options = {{
					headerShown: false
				}}
			/>
		</Page_HomeStackNavigator.Navigator>
	)
};
const Page_log_inStackNavigator = createStackNavigator();
const ScreenForPage_log_in = () => {
	return (
		<Page_log_inStackNavigator.Navigator>
			<Page_log_inStackNavigator.Screen
				name = "Page_log_in"
				component = {Page_log_in}
				options = {{
					headerShown: false
				}}
			/>
		</Page_log_inStackNavigator.Navigator>
	)
};
const Page_SplashStackNavigator = createStackNavigator();
const ScreenForPage_Splash = () => {
	return (
		<Page_SplashStackNavigator.Navigator>
			<Page_SplashStackNavigator.Screen
				name = "Page_Splash"
				component = {Page_Splash}
				options = {{
					headerShown: false
				}}
			/>
		</Page_SplashStackNavigator.Navigator>
	)
};
const Page_Splash_2StackNavigator = createStackNavigator();
const ScreenForPage_Splash_2 = () => {
	return (
		<Page_Splash_2StackNavigator.Navigator>
			<Page_Splash_2StackNavigator.Screen
				name = "Page_Splash_2"
				component = {Page_Splash_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Splash_2StackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_first_page"
							component = {ScreenForPage_first_page}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Home_2"
							component = {ScreenForPage_Home_2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_11_Pro___X___15"
							component = {ScreenForPage_iPhone_11_Pro___X___15}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Home_2_2"
							component = {ScreenForPage_Home_2_2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Home_10"
							component = {ScreenForPage_Home_10}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Home_3"
							component = {ScreenForPage_Home_3}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Home"
							component = {ScreenForPage_Home}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_log_in"
							component = {ScreenForPage_log_in}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Splash"
							component = {ScreenForPage_Splash}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Splash_2"
							component = {ScreenForPage_Splash_2}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

