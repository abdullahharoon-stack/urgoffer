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
const Page_Splash_2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page9}    >
			<View style = {noneModeStyles._Attachment_1630674196_1_container}    >
				<View style = {noneModeStyles._Attachment_1630674196_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Attachment_1630674196_1_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Splash_2

const noneModeStyles = StyleSheet.create({
_page9: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Attachment_1630674196_1_container: {
	width: 240,
	height: 51,
	position: "absolute",
	left: 68,
	top: 381,
	},
_Attachment_1630674196_1: {
	width: "100%",
	height: "100%",
	},
})

