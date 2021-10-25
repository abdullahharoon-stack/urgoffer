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
const Page_log_in  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page7}    >
			<View style = {noneModeStyles._Rectangle_144}    >
			</View>
			<View style = {noneModeStyles._Rectangle_999}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1000}    >
			</View>
			<View style = {noneModeStyles._Rectangle_141}    >
			</View>
			<View style = {noneModeStyles._Attachment_1630674196_1_container}    >
				<View style = {noneModeStyles._Attachment_1630674196_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Attachment_1630674196_1_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Name}   >
				Name
			</Text>
			<Text style = {noneModeStyles._Username}   >
				Username
			</Text>
			<Text style = {noneModeStyles._Email}   >
				Email
			</Text>
			<Text style = {noneModeStyles._Password}   >
				Password
			</Text>
			<Text style = {noneModeStyles._Jhone_Doe}   >
				Jhone Doe
			</Text>
			<Text style = {noneModeStyles._jhonedoe_tx12345}   >
				jhonedoe.tx12345
			</Text>
			<Text style = {noneModeStyles._jonedoe_tx_email_com}   >
				jonedoe.tx@email.com
			</Text>
			<Text style = {noneModeStyles.____________}   >
				***********
			</Text>
			<Text style = {noneModeStyles._Welcome_Back_}   >
				Welcome Back!
			</Text>
			<Text style = {noneModeStyles._Sign_In_to_continue___}   >
				Sign In to continue...
			</Text>
			<View style = {noneModeStyles._Rectangle_998}    >
			</View>
			<Text style = {noneModeStyles._Sign_Up}   >
				Sign Up
			</Text>
			<Text style = {noneModeStyles._Have_an_account__Sign_In_Here}   >
				Have an account? Sign In Here
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_log_in

const noneModeStyles = StyleSheet.create({
_page7: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_144: {
	width: 331,
	height: 49,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 22,
	top: 374,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 2,
	},
_Rectangle_999: {
	width: 331,
	height: 49,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 22,
	top: 468,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 2,
	},
_Rectangle_1000: {
	width: 331,
	height: 49,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 22,
	top: 562,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 2,
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
_Attachment_1630674196_1_container: {
	width: 240,
	height: 51,
	position: "absolute",
	left: 68,
	top: 56,
	},
_Attachment_1630674196_1: {
	width: "100%",
	height: "100%",
	},
_Name: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 253,
	color: "rgb(241, 85, 40)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Username: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 341,
	color: "rgb(241, 85, 40)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Email: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 434,
	color: "rgb(241, 85, 40)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 528,
	color: "rgb(241, 85, 40)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Jhone_Doe: {
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
_jhonedoe_tx12345: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 36,
	top: 388,
	color: "rgb(126, 126, 124)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_jonedoe_tx_email_com: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 36,
	top: 482,
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
	top: 576,
	color: "rgb(126, 126, 124)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Welcome_Back_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 156,
	color: "rgb(48, 48, 48)",
	fontSize: 24,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Sign_In_to_continue___: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 192,
	color: "rgb(48, 48, 48)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Rectangle_998: {
	width: 331,
	height: 55,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 22,
	top: 654,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 11,
	},
_Sign_Up: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 157,
	top: 668,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Have_an_account__Sign_In_Here: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 93,
	top: 739,
	color: "rgb(126, 126, 124)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
})

