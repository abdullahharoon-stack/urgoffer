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
import {image_Rectangle_1010_link} from './assets/imageLinks.js'
const Page_iPhone_11_Pro___X___15  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
			<View style = {noneModeStyles._icomoon_free_cross}    >
				<View style = {noneModeStyles.style2}    >
					<View style = {noneModeStyles.style3}   >
						<Svg style={{height: 25, width: 25}} viewBox = "0 0 25 25">
							<Path fill = {"#323232"}     d = "M24.7706 20.0836L17.187 12.5L24.7706 4.91639C24.9159 4.7693 24.9974 4.57086 24.9974 4.3641C24.9974 4.15734 24.9159 3.95891 24.7706 3.81181L21.1882 0.229365C21.1157 0.156665 21.0297 0.0989811 20.9349 0.0596211C20.8401 0.0202611 20.7385 0 20.6359 0C20.5333 0 20.4316 0.0202611 20.3369 0.0596211C20.2421 0.0989811 20.156 0.156665 20.0836 0.229365L12.5 7.81297L4.91639 0.229365C4.7699 0.0829183 4.57124 0.000649026 4.3641 0.000649026C4.15696 0.000649026 3.9583 0.0829183 3.81181 0.229365L0.229365 3.81181C0.156665 3.88424 0.0989811 3.97032 0.0596211 4.06509C0.0202611 4.15986 0 4.26148 0 4.3641C0 4.46672 0.0202611 4.56834 0.0596211 4.66311C0.0989811 4.75789 0.156665 4.84396 0.229365 4.91639L7.81297 12.5L0.229365 20.0836C0.0829183 20.2301 0.000649026 20.4287 0.000649026 20.6359C0.000649026 20.843 0.0829183 21.0417 0.229365 21.1882L3.81181 24.7706C3.88424 24.8433 3.97032 24.901 4.06509 24.9404C4.15986 24.9797 4.26148 25 4.3641 25C4.46672 25 4.56834 24.9797 4.66311 24.9404C4.75789 24.901 4.84396 24.8433 4.91639 24.7706L12.5 17.187L20.0836 24.7706C20.2301 24.9171 20.4287 24.9993 20.6359 24.9993C20.843 24.9993 21.0417 24.9171 21.1882 24.7706L24.7706 21.1882C24.8433 21.1157 24.901 21.0297 24.9404 20.9349C24.9797 20.8401 25 20.7385 25 20.6359C25 20.5333 24.9797 20.4316 24.9404 20.3369C24.901 20.2421 24.8433 20.156 24.7706 20.0836Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_1010_container}    >
				<View style = {noneModeStyles._Rectangle_1010}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_1010_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Frame_4}    >
				<View style = {noneModeStyles._Rectangle_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._navigation_status_bar_light}    >
				<View style = {noneModeStyles._Battery}    >
					<View style = {noneModeStyles.style10}    >
						<View style = {noneModeStyles.style11}   >
							<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
								<Path fill = {"none"}   stroke = {"#010101"}  d = "M0.50951 2.71739C0.50951 1.49801 1.49801 0.50951 2.71739 0.50951H19.2826C20.502 0.50951 21.4905 1.49801 21.4905 2.71739V8.83151C21.4905 10.0509 20.502 11.0394 19.2826 11.0394H2.71738C1.49801 11.0394 0.50951 10.0509 0.50951 8.83151V2.71739Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style12}    >
						<View style = {noneModeStyles.style13}   >
							<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
								<Path fill = {"black"}     d = "M0 0V4C0.789713 3.66122 1.30325 2.87313 1.30325 2C1.30325 1.12687 0.789713 0.338777 0 0Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style14}    >
						<View style = {noneModeStyles.style15}   >
							<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
								<Path fill = {"black"}     d = "M0 1.35869C0 0.608308 0.608307 0 1.35869 0H16.6412C17.3916 0 17.9999 0.608307 17.9999 1.35869V6.11411C17.9999 6.86449 17.3916 7.4728 16.6412 7.4728H1.35869C0.60831 7.4728 0 6.86449 0 6.11411V1.35869Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Wifi}    >
				</View>
				<View style = {noneModeStyles._Mobile_Signal}    >
				</View>
				<Text style = {noneModeStyles._9_41}   >
					10:00
				</Text>
			</View>
			<View style = {noneModeStyles._eva_arrow_back_fill}    >
				<View style = {noneModeStyles.style20}    >
					<View style = {noneModeStyles.style21}   >
						<Svg style={{height: 15, width: 16}} viewBox = "0 0 16 15">
							<Path fill = {"black"}     d = "M15 6.00125H3.14L6.77 1.64125C6.93974 1.43704 7.0214 1.17375 6.99702 0.909329C6.97264 0.644902 6.84422 0.400991 6.64 0.231252C6.43578 0.0615137 6.1725 -0.0201482 5.90808 0.0042315C5.64365 0.0286112 5.39974 0.157036 5.23 0.361252L0.23 6.36125C0.196361 6.40898 0.166279 6.45911 0.14 6.51125C0.14 6.56125 0.14 6.59125 0.0700002 6.64125C0.0246737 6.75591 0.000941121 6.87796 0 7.00125C0.000941121 7.12454 0.0246737 7.24659 0.0700002 7.36125C0.0700002 7.41125 0.0699999 7.44125 0.14 7.49125C0.166279 7.54339 0.196361 7.59353 0.23 7.64125L5.23 13.6413C5.32402 13.7541 5.44176 13.8449 5.57485 13.9071C5.70793 13.9694 5.85309 14.0015 6 14.0013C6.23365 14.0017 6.46009 13.9203 6.64 13.7713C6.74126 13.6873 6.82496 13.5842 6.88631 13.4679C6.94766 13.3515 6.98546 13.2242 6.99754 13.0932C7.00961 12.9622 6.99573 12.8302 6.95669 12.7046C6.91764 12.579 6.8542 12.4623 6.77 12.3613L3.14 8.00125H15C15.2652 8.00125 15.5196 7.8959 15.7071 7.70836C15.8946 7.52082 16 7.26647 16 7.00125C16 6.73604 15.8946 6.48168 15.7071 6.29415C15.5196 6.10661 15.2652 6.00125 15 6.00125Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Jeans}   >
				Jeans
			</Text>
			<View style = {noneModeStyles._Group_5265}    >
				<View style = {noneModeStyles._Rectangle_3}    >
					<View style = {noneModeStyles._Rectangle_3_2}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_5249}    >
					<View style = {noneModeStyles._Settings}    >
						<Text style = {noneModeStyles._Settings_2}   >
							Settings
						</Text>
					</View>
					<View style = {noneModeStyles._Frame_57}    >
						<View style = {noneModeStyles.style30}    >
							<View style = {noneModeStyles.style31}   >
								<Svg style={{height: 20, width: 19}} viewBox = "0 0 19 20">
									<Path fill = {"#353535"}     d = "M18.6711 12.1917L16.8777 10.7542C16.9004 10.5325 16.9199 10.2734 16.9199 9.99918C16.9199 9.725 16.9012 9.46586 16.8777 9.24418L18.6727 7.80586C19.0061 7.53586 19.0971 7.05668 18.8849 6.65754L17.0199 3.35C16.8207 2.97668 16.3842 2.785 15.9411 2.9525L13.8249 3.82332C13.4193 3.52332 12.9941 3.27 12.5543 3.0675L12.2323 0.76668C12.1795 0.33 11.8087 0 11.3706 0H7.6309C7.19269 0 6.82282 0.33 6.77076 0.76L6.44802 3.06918C6.02201 3.26586 5.60335 3.51586 5.17978 3.825L3.05791 2.95168C2.66033 2.79418 2.18474 2.97082 1.98718 3.3425L0.119802 6.65418C-0.100502 7.03586 -0.00946107 7.53168 0.331189 7.80836L2.1246 9.24586C2.09613 9.52668 2.08234 9.77086 2.08234 10C2.08234 10.2292 2.09617 10.4734 2.1246 10.755L0.32955 12.1934C-0.00378293 12.4642 -0.0940233 12.9434 0.118163 13.3417L1.98314 16.6492C2.18234 17.0217 2.61483 17.215 3.06195 17.0467L5.17814 16.1759C5.583 16.475 6.00818 16.7284 6.44802 16.9317L6.76996 19.2317C6.82278 19.67 7.19269 20 7.6317 20H11.3714C11.8096 20 12.1803 19.67 12.2323 19.24L12.5551 16.9317C12.9811 16.7342 13.3989 16.485 13.8233 16.175L15.9452 17.0483C16.0476 17.0891 16.1541 17.11 16.2639 17.11C16.5793 17.11 16.8695 16.9333 17.0159 16.6583L18.889 13.3333C19.0971 12.9433 19.006 12.4642 18.6711 12.1917ZM9.50072 13.3333C7.70731 13.3333 6.24883 11.8383 6.24883 10C6.24883 8.16168 7.70731 6.66668 9.50072 6.66668C11.2941 6.66668 12.7526 8.16168 12.7526 10C12.7526 11.8383 11.2941 13.3333 9.50072 13.3333Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5251}    >
					<View style = {noneModeStyles._Frame_56}    >
						<View style = {noneModeStyles.style34}    >
							<View style = {noneModeStyles.style35}   >
								<Svg style={{height: 21, width: 20}} viewBox = "0 0 20 21">
									<Path fill = {"#353535"}     d = "M16.3443 21H14.319H5.68101H3.6557C1.63671 21 0 19.3837 0 17.3899V8.23973C0.00777546 7.45465 0.381325 6.71687 1.01266 6.23968L7.90886 0.719566C9.12232 -0.239855 10.8473 -0.239855 12.0608 0.719566L18.9873 6.22968C19.6163 6.70882 19.9892 7.44537 20 8.22973V17.3899C20 19.3837 18.3633 21 16.3443 21Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Home}    >
						<Text style = {noneModeStyles._Home_2}   >
							Home
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5250}    >
					<View style = {noneModeStyles._Add_Bin}    >
						<Text style = {noneModeStyles._Add_Bin_2}   >
							Add Bin
						</Text>
					</View>
					<View style = {noneModeStyles._plus_1}    >
					</View>
					<View style = {noneModeStyles.style42}    >
						<View style = {noneModeStyles.style43}   >
							<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
								<Path fill = {"#353535"}     d = "M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0ZM14.375 10.8333H10.8333V14.375C10.8333 14.8351 10.4601 15.2083 10 15.2083C9.53995 15.2083 9.16672 14.8351 9.16672 14.375V10.8333H5.625C5.16495 10.8333 4.79172 10.4601 4.79172 10C4.79172 9.53995 5.16495 9.16672 5.625 9.16672H9.16672V5.625C9.16672 5.16495 9.53995 4.79172 10 4.79172C10.4601 4.79172 10.8333 5.16495 10.8333 5.625V9.16672H14.375C14.8351 9.16672 15.2083 9.53995 15.2083 10C15.2083 10.4601 14.8351 10.8333 14.375 10.8333Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5248}    >
					<View style = {noneModeStyles._Group_5223}    >
						<Text style = {noneModeStyles._Profile}   >
							Profile
						</Text>
					</View>
					<View style = {noneModeStyles._user_1}    >
						<View style = {noneModeStyles._Group}    >
							<View style = {noneModeStyles._Group_2}    >
								<View style = {noneModeStyles.style50}    >
									<View style = {noneModeStyles.style51}   >
										<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
											<Path fill = {"#353535"}     d = "M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_3}    >
							<View style = {noneModeStyles._Group_4}    >
								<View style = {noneModeStyles.style54}    >
									<View style = {noneModeStyles.style55}   >
										<Svg style={{height: 8, width: 16}} viewBox = "0 0 16 8">
											<Path fill = {"#353535"}     d = "M13.9721 2.06916C12.658 0.734827 10.9159 0 9.06667 0H6.93333C5.08416 0 3.34201 0.734827 2.02788 2.06916C0.720178 3.39694 0 5.14962 0 7.00444C0 7.29899 0.238791 7.53778 0.533333 7.53778H15.4667C15.7612 7.53778 16 7.29899 16 7.00444C16 5.14962 15.2798 3.39694 13.9721 2.06916Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_11_Pro___X___15

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(217, 217, 217)",
	},
_icomoon_free_cross: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 329,
	top: 116,
	},
style2: {
	position: "absolute",
	transform: [
		{translateX: -0.000732422},
		{translateY: -0.000793457},
	],
	},
style3: {
	},
_Rectangle_1010_container: {
	width: 331,
	height: 315,
	position: "absolute",
	left: 24,
	top: 268,
	},
_Rectangle_1010: {
	width: "100%",
	height: "100%",
	borderRadius: 17,
	},
_Frame_4: {
	width: 375,
	height: 100,
	backgroundColor: "rgb(217, 217, 217)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(170, 170, 170, 0.25)",
	shadowRadius: 9,
	},
_Rectangle_2: {
	width: 375,
	height: 100,
	backgroundColor: "rgb(217, 217, 217)",
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(170, 170, 170, 0.25)",
	shadowRadius: 9,
	},
_navigation_status_bar_light: {
	width: 368,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Battery: {
	width: 23.874,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateX: 329.728},
		{translateY: 16.3333},
	],
	},
style10: {
	height: 11.3333,
	position: "absolute",
	top: 0,
	},
style11: {
	},
style12: {
	height: 4,
	position: "absolute",
	top: 3.66666,
	transform: [
		{translateX: 22.5708},
	],
	},
style13: {
	},
style14: {
	height: 7.33334,
	position: "absolute",
	top: 2,
	transform: [
		{translateX: 1.96265},
	],
	},
style15: {
	},
_Wifi: {
	width: 14.9873,
	height: 10.9656,
	position: "absolute",
	transform: [
		{translateX: 309.801},
		{translateY: 16.3307},
	],
	},
_Mobile_Signal: {
	width: 16.6826,
	height: 10.6667,
	position: "absolute",
	transform: [
		{translateX: 288.185},
		{translateY: 16.6667},
	],
	},
_9_41: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: 13,
	transform: [
		{translateX: 22},
	],
	color: "rgba(0, 0, 0, 0.898)",
	fontSize: 15,
	fontWeight: "500",
	fontFamily: "Rubik",
	textAlign: "left",
	},
_eva_arrow_back_fill: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 18,
	top: 60,
	},
style20: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4.99875},
	],
	},
style21: {
	},
_Jeans: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 159.492,
	top: 57,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Group_5265: {
	width: 375,
	height: 66,
	position: "absolute",
	left: 0,
	top: 746,
	},
_Rectangle_3: {
	width: 375,
	height: 66,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_3_2: {
	width: 375,
	height: 66,
	backgroundColor: "rgb(217, 217, 217)",
	position: "absolute",
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(170, 170, 170, 0.25)",
	shadowRadius: 9,
	},
_Group_5249: {
	width: 50,
	height: 43,
	position: "absolute",
	left: 203,
	top: 14,
	},
_Settings: {
	width: 50,
	height: 18,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 25,
	},
_Settings_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(53, 53, 53)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Frame_57: {
	width: 19,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 16,
	top: 0,
	},
style30: {
	position: "absolute",
	},
style31: {
	},
_Group_5251: {
	width: 36,
	height: 45,
	position: "absolute",
	left: 42,
	top: 12,
	},
_Frame_56: {
	width: 20,
	height: 21,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 8,
	top: 0,
	},
style34: {
	position: "absolute",
	},
style35: {
	},
_Home: {
	width: 36,
	height: 18,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 27,
	},
_Home_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(53, 53, 53)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Group_5250: {
	width: 47,
	height: 44,
	position: "absolute",
	left: 117,
	top: 13,
	},
_Add_Bin: {
	width: 47,
	height: 18,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 26,
	},
_Add_Bin_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(53, 53, 53)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_plus_1: {
	width: 19,
	height: 19,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 14},
	],
	},
style42: {
	position: "absolute",
	transform: [
		{translateX: 14},
	],
	},
style43: {
	},
_Group_5248: {
	width: 41,
	height: 39,
	position: "absolute",
	left: 292,
	top: 18,
	},
_Group_5223: {
	width: 41,
	height: 16,
	position: "absolute",
	transform: [
		{translateY: 23},
	],
	},
_Profile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(53, 53, 53)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "center",
	},
_user_1: {
	width: 18,
	height: 18,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 12},
	],
	},
_Group: {
	width: 9.49219,
	height: 9.49219,
	position: "absolute",
	transform: [
		{translateX: 4},
	],
	},
_Group_2: {
	width: 9.49219,
	height: 9.49219,
	position: "absolute",
	},
style50: {
	position: "absolute",
	},
style51: {
	},
_Group_3: {
	width: 15.8203,
	height: 7.45312,
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 10.5469},
	],
	},
_Group_4: {
	width: 15.8203,
	height: 7.45312,
	position: "absolute",
	},
style54: {
	position: "absolute",
	},
style55: {
	},
})

