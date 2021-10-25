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
import {image_Ellipse_142_link} from './assets/imageLinks.js'
import {image_Ellipse_143_link} from './assets/imageLinks.js'
import {image_Ellipse_144_link} from './assets/imageLinks.js'
const Page_Home_2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._Rectangle_993}    >
			</View>
			<Text style = {noneModeStyles._Erick}   >
				Erick
			</Text>
			<Text style = {noneModeStyles._Search_User_to_add_in_your_household}   >
				Search User to add in your household
			</Text>
			<Text style = {noneModeStyles._Added_Persons_}   >
				Added Persons:
			</Text>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<Text style = {noneModeStyles._Add_Persons}   >
				Add Persons
			</Text>
			<View style = {noneModeStyles._heroicons_solid_menu_alt_3}    >
				<View style = {noneModeStyles._heroicons_solid_menu_alt_3_2}    >
					<View style = {noneModeStyles._Group}    >
						<View style = {noneModeStyles._Group_2}    >
							<View style = {noneModeStyles.style11}    >
								<View style = {noneModeStyles.style12}   >
									<Svg style={{height: 3, width: 17}} viewBox = "0 0 17 3">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M17 1.21428C17 0.892235 16.8721 0.583377 16.6443 0.355655C16.4166 0.127933 16.1078 0 15.7857 0H1.21433C0.892285 0 0.583427 0.127933 0.355704 0.355655C0.127982 0.583377 5.01813e-05 0.892235 5.01813e-05 1.21428C5.01813e-05 1.53633 0.127982 1.84519 0.355704 2.07291C0.583427 2.30063 0.892285 2.42856 1.21433 2.42856H15.7857C16.1078 2.42856 16.4166 2.30063 16.6443 2.07291C16.8721 1.84519 17 1.53633 17 1.21428Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style13}    >
								<View style = {noneModeStyles.style14}   >
									<Svg style={{height: 3, width: 17}} viewBox = "0 0 17 3">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M17 1.21428C17 0.892235 16.8721 0.583377 16.6443 0.355655C16.4166 0.127933 16.1078 0 15.7857 0H1.21433C0.892285 0 0.583427 0.127933 0.355704 0.355655C0.127982 0.583377 5.01813e-05 0.892235 5.01813e-05 1.21428C5.01813e-05 1.53633 0.127982 1.84519 0.355704 2.07291C0.583427 2.30063 0.892285 2.42856 1.21433 2.42856H15.7857C16.1078 2.42856 16.4166 2.30063 16.6443 2.07291C16.8721 1.84519 17 1.53633 17 1.21428Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style15}    >
								<View style = {noneModeStyles.style16}   >
									<Svg style={{height: 3, width: 10}} viewBox = "0 0 10 3">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M10 1.24999C10 0.91847 9.86831 0.600531 9.63389 0.366113C9.39947 0.131695 9.08153 0 8.75001 0H1.25009C0.918573 0 0.600632 0.131695 0.366214 0.366113C0.131796 0.600531 0.00010232 0.91847 0.00010232 1.24999C0.00010232 1.5815 0.131796 1.89944 0.366214 2.13386C0.600632 2.36828 0.918573 2.49997 1.25009 2.49997H8.75001C9.08153 2.49997 9.39947 2.36828 9.63389 2.13386C9.86831 1.89944 10 1.5815 10 1.24999Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._navigation_status_bar_light}    >
				<View style = {noneModeStyles._Battery}    >
					<View style = {noneModeStyles.style19}    >
						<View style = {noneModeStyles.style20}   >
							<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
								<Path fill = {"none"}   stroke = {"black"}  d = "M0.50951 2.71739C0.50951 1.49801 1.49801 0.50951 2.71739 0.50951H19.2826C20.502 0.50951 21.4905 1.49801 21.4905 2.71739V8.83151C21.4905 10.0509 20.502 11.0394 19.2826 11.0394H2.71738C1.49801 11.0394 0.50951 10.0509 0.50951 8.83151V2.71739Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style21}    >
						<View style = {noneModeStyles.style22}   >
							<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
								<Path fill = {"black"}     d = "M0 0V4C0.789713 3.66122 1.30325 2.87313 1.30325 2C1.30325 1.12687 0.789713 0.338777 0 0Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style23}    >
						<View style = {noneModeStyles.style24}   >
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
			<View style = {noneModeStyles._bytesize_search}    >
				<View style = {noneModeStyles._Group_3}    >
					<View style = {noneModeStyles.style30}    >
						<View style = {noneModeStyles.style31}   >
							<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
								<Path fill = {"none"}   stroke = {"#E7E7E7"} strokeWidth = {2} d = "M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style32}    >
						<View style = {noneModeStyles.style33}   >
							<Svg style={{height: 7, width: 7}} viewBox = "0 0 7 7">
								<Path fill = {"none"}   stroke = {"#E7E7E7"} strokeWidth = {2} d = "M1.09804 1.09804L5.90196 5.90196"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_142_container}    >
				<View style = {noneModeStyles._Ellipse_142}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_142_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_143_container}    >
				<View style = {noneModeStyles._Ellipse_143}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_143_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_144_container}    >
				<View style = {noneModeStyles._Ellipse_144}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Ellipse_144_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Erick1212}   >
				Erick1212
			</Text>
			<Text style = {noneModeStyles._Erick1212_2}   >
				Erick1212
			</Text>
			<Text style = {noneModeStyles._Erick1212_3}   >
				Erick1212
			</Text>
			<Text style = {noneModeStyles._Erick_John}   >
				Erick John
			</Text>
			<Text style = {noneModeStyles._Erick_John_2}   >
				Erick John
			</Text>
			<Text style = {noneModeStyles._Erick_John_3}   >
				Erick John
			</Text>
			<View style = {noneModeStyles._Rectangle_1036}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1037}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1038}    >
			</View>
			<Text style = {noneModeStyles._Remove}   >
				Remove
			</Text>
			<Text style = {noneModeStyles._Remove_2}   >
				Remove
			</Text>
			<Text style = {noneModeStyles._Remove_3}   >
				Remove
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
						<View style = {noneModeStyles.style59}    >
							<View style = {noneModeStyles.style60}   >
								<Svg style={{height: 20, width: 19}} viewBox = "0 0 19 20">
									<Path fill = {"#353535"}     d = "M18.6711 12.1917L16.8777 10.7542C16.9004 10.5325 16.9199 10.2734 16.9199 9.99918C16.9199 9.725 16.9012 9.46586 16.8777 9.24418L18.6727 7.80586C19.0061 7.53586 19.0971 7.05668 18.8849 6.65754L17.0199 3.35C16.8207 2.97668 16.3842 2.785 15.9411 2.9525L13.8249 3.82332C13.4193 3.52332 12.9941 3.27 12.5543 3.0675L12.2323 0.76668C12.1795 0.33 11.8087 0 11.3706 0H7.6309C7.19269 0 6.82282 0.33 6.77076 0.76L6.44802 3.06918C6.02201 3.26586 5.60335 3.51586 5.17978 3.825L3.05791 2.95168C2.66033 2.79418 2.18474 2.97082 1.98718 3.3425L0.119802 6.65418C-0.100502 7.03586 -0.00946107 7.53168 0.331189 7.80836L2.1246 9.24586C2.09613 9.52668 2.08234 9.77086 2.08234 10C2.08234 10.2292 2.09617 10.4734 2.1246 10.755L0.32955 12.1934C-0.00378293 12.4642 -0.0940233 12.9434 0.118163 13.3417L1.98314 16.6492C2.18234 17.0217 2.61483 17.215 3.06195 17.0467L5.17814 16.1759C5.583 16.475 6.00818 16.7284 6.44802 16.9317L6.76996 19.2317C6.82278 19.67 7.19269 20 7.6317 20H11.3714C11.8096 20 12.1803 19.67 12.2323 19.24L12.5551 16.9317C12.9811 16.7342 13.3989 16.485 13.8233 16.175L15.9452 17.0483C16.0476 17.0891 16.1541 17.11 16.2639 17.11C16.5793 17.11 16.8695 16.9333 17.0159 16.6583L18.889 13.3333C19.0971 12.9433 19.006 12.4642 18.6711 12.1917ZM9.50072 13.3333C7.70731 13.3333 6.24883 11.8383 6.24883 10C6.24883 8.16168 7.70731 6.66668 9.50072 6.66668C11.2941 6.66668 12.7526 8.16168 12.7526 10C12.7526 11.8383 11.2941 13.3333 9.50072 13.3333Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5251}    >
					<View style = {noneModeStyles._Frame_56}    >
						<View style = {noneModeStyles.style63}    >
							<View style = {noneModeStyles.style64}   >
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
					<View style = {noneModeStyles.style71}    >
						<View style = {noneModeStyles.style72}   >
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
						<View style = {noneModeStyles._Group_4}    >
							<View style = {noneModeStyles._Group_5}    >
								<View style = {noneModeStyles.style79}    >
									<View style = {noneModeStyles.style80}   >
										<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
											<Path fill = {"#353535"}     d = "M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_6}    >
							<View style = {noneModeStyles._Group_7}    >
								<View style = {noneModeStyles.style83}    >
									<View style = {noneModeStyles.style84}   >
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
export default Page_Home_2

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(217, 217, 217)",
	},
_Rectangle_993: {
	width: 331,
	height: 45,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 22,
	top: 132,
	borderRadius: 10,
	},
_Erick: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 74,
	top: 147,
	color: "rgb(136, 136, 136)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Search_User_to_add_in_your_household: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 112,
	color: "rgb(136, 136, 136)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Added_Persons_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 22,
	top: 204,
	color: "rgb(136, 136, 136)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
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
_Add_Persons: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 131,
	top: 58,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_heroicons_solid_menu_alt_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 19,
	top: 60,
	},
_heroicons_solid_menu_alt_3_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Group: {
	width: 16.8,
	height: 14.4,
	position: "absolute",
	transform: [
		{translateX: 3.59985},
		{translateY: 4.79999},
	],
	},
_Group_2: {
	width: 16.8,
	height: 14.4,
	position: "absolute",
	},
style11: {
	position: "absolute",
	},
style12: {
	},
style13: {
	position: "absolute",
	transform: [
		{translateY: 6},
	],
	},
style14: {
	},
style15: {
	position: "absolute",
	transform: [
		{translateY: 12},
	],
	},
style16: {
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
style19: {
	height: 11.3333,
	position: "absolute",
	top: 0,
	},
style20: {
	},
style21: {
	height: 4,
	position: "absolute",
	top: 3.66666,
	transform: [
		{translateX: 22.5708},
	],
	},
style22: {
	},
style23: {
	height: 7.33334,
	position: "absolute",
	top: 2,
	transform: [
		{translateX: 1.96265},
	],
	},
style24: {
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
_bytesize_search: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 45,
	top: 145,
	},
_Group_3: {
	width: 17.5,
	height: 17.5,
	position: "absolute",
	transform: [
		{translateX: 1.25},
		{translateY: 1.25},
	],
	},
style30: {
	position: "absolute",
	},
style31: {
	},
style32: {
	position: "absolute",
	transform: [
		{translateX: 13.125},
		{translateY: 13.125},
	],
	},
style33: {
	},
_Ellipse_142_container: {
	width: 65,
	height: 65,
	position: "absolute",
	left: 27,
	top: 237,
	},
_Ellipse_142: {
	width: "100%",
	height: "100%",
	},
_Ellipse_143_container: {
	width: 65,
	height: 65,
	position: "absolute",
	left: 27,
	top: 314,
	},
_Ellipse_143: {
	width: "100%",
	height: "100%",
	},
_Ellipse_144_container: {
	width: 65,
	height: 65,
	position: "absolute",
	left: 27,
	top: 391,
	},
_Ellipse_144: {
	width: "100%",
	height: "100%",
	},
_Erick1212: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 116,
	top: 247,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Erick1212_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 116,
	top: 324,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Erick1212_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 116,
	top: 401,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Erick_John: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 116,
	top: 274,
	color: "rgb(98, 98, 98)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Erick_John_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 116,
	top: 351,
	color: "rgb(98, 98, 98)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Erick_John_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 116,
	top: 428,
	color: "rgb(98, 98, 98)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Rectangle_1036: {
	width: 74,
	height: 36,
	backgroundColor: "rgb(58, 58, 58)",
	position: "absolute",
	left: 277,
	top: 326,
	borderRadius: 20,
	},
_Rectangle_1037: {
	width: 74,
	height: 36,
	backgroundColor: "rgb(58, 58, 58)",
	position: "absolute",
	left: 277,
	top: 247,
	borderRadius: 20,
	},
_Rectangle_1038: {
	width: 74,
	height: 36,
	backgroundColor: "rgb(58, 58, 58)",
	position: "absolute",
	left: 277,
	top: 405,
	borderRadius: 20,
	},
_Remove: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 286,
	top: 334,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Remove_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 286,
	top: 255,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Remove_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 286,
	top: 413,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "500",
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
style59: {
	position: "absolute",
	},
style60: {
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
style63: {
	position: "absolute",
	},
style64: {
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
style71: {
	position: "absolute",
	transform: [
		{translateX: 14},
	],
	},
style72: {
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
_Group_4: {
	width: 9.49219,
	height: 9.49219,
	position: "absolute",
	transform: [
		{translateX: 4},
	],
	},
_Group_5: {
	width: 9.49219,
	height: 9.49219,
	position: "absolute",
	},
style79: {
	position: "absolute",
	},
style80: {
	},
_Group_6: {
	width: 15.8203,
	height: 7.45312,
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 10.5469},
	],
	},
_Group_7: {
	width: 15.8203,
	height: 7.45312,
	position: "absolute",
	},
style83: {
	position: "absolute",
	},
style84: {
	},
})

