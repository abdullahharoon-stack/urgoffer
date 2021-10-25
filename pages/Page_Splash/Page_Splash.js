import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Attachment_1630674196_1_link} from './assets/imageLinks.js'
const Page_Splash  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page8}    >
			<View style = {noneModeStyles._Attachment_1630674196_1_container}    >
				<View style = {noneModeStyles._Attachment_1630674196_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Attachment_1630674196_1_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Email}   >
				Email
			</Text>
			<Text style = {noneModeStyles._Password}   >
				Password
			</Text>
			<View style = {noneModeStyles._Rectangle_141}    >
			</View>
			<View style = {noneModeStyles._Rectangle_144}    >
			</View>
			<Text style = {noneModeStyles._helo_sample_com}   >
				helo@sample.com
			</Text>
			<Text style = {noneModeStyles.____________}   >
				***********
			</Text>
			<Text style = {noneModeStyles._Forgt_Password_}   >
				Forgt Password?
			</Text>
			<Text style = {noneModeStyles._Not_have_yet__Create_an_account}   >
				Not have yet? Create an account
			</Text>
			<View style = {noneModeStyles._Rectangle_998}    >
			</View>
			<Text style = {noneModeStyles._Sign_In}   >
				Sign In
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Splash

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Attachment_1630674196_1_container: {
	width: 240,
	height: 51,
	position: "absolute",
	left: 67,
	top: 89,
	},
_Attachment_1630674196_1: {
	width: "100%",
	height: "100%",
	},
_Email: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 242,
	color: "rgb(241, 85, 40)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 341,
	color: "rgb(241, 85, 40)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Rectangle_141: {
	width: 331,
	height: 49,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 22,
	top: 281,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 2,
	},
_Rectangle_144: {
	width: 331,
	height: 49,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 22,
	top: 380,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 2,
	},
_helo_sample_com: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 36,
	top: 295,
	color: "rgb(126, 126, 124)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
____________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 36,
	top: 394,
	color: "rgb(126, 126, 124)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Forgt_Password_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 240,
	top: 432,
	color: "rgb(126, 126, 124)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Not_have_yet__Create_an_account: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 87,
	top: 739,
	color: "rgb(126, 126, 124)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_998: {
	width: 331,
	height: 55,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 21,
	top: 491,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 11,
	},
_Sign_In: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 156,
	top: 505,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
})

