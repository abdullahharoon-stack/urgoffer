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
import {image_Rectangle_1016_link} from './assets/imageLinks.js'
import {image_Rectangle_1018_link} from './assets/imageLinks.js'
import {image_Rectangle_1017_link} from './assets/imageLinks.js'
import {image_Rectangle_1019_link} from './assets/imageLinks.js'
import {image_Rectangle_1010_link} from './assets/imageLinks.js'
const Page_Home_2_2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
			<View style = {noneModeStyles._viewport}    >
				<Text style = {noneModeStyles._Accessories_Bin}   >
					Accessories Bin 
				</Text>
				<View style = {noneModeStyles._layer_731db4}    >
					<View style = {noneModeStyles._layer_204b4b}   >
						<Svg style={{height: 118, width: 393}} viewBox = "0 0 393 118">
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._navigation_status_bar_light}    >
					<View style = {noneModeStyles._Battery}    >
						<View style = {noneModeStyles._layer_767a8d}    >
							<View style = {noneModeStyles._layer_36f9dc}   >
								<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
									<Path fill = {"none"}   stroke = {"#010101"}  d = "M0.50951 2.71739C0.50951 1.49801 1.49801 0.50951 2.71739 0.50951H19.2826C20.502 0.50951 21.4905 1.49801 21.4905 2.71739V8.83151C21.4905 10.0509 20.502 11.0394 19.2826 11.0394H2.71738C1.49801 11.0394 0.50951 10.0509 0.50951 8.83151V2.71739Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_cf6b85}    >
							<View style = {noneModeStyles._layer_0fc021}   >
								<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
									<Path fill = {"black"}     d = "M0 0V4C0.789713 3.66122 1.30325 2.87313 1.30325 2C1.30325 1.12687 0.789713 0.338777 0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_f0c1fd}    >
							<View style = {noneModeStyles._layer_5734cf}   >
								<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
									<Path fill = {"black"}     d = "M0 1.3587C0 0.608312 0.608311 0 1.3587 0H16.6413C17.3917 0 18 0.608311 18 1.3587V6.11415C18 6.86454 17.3917 7.47285 16.6413 7.47285H1.3587C0.608314 7.47285 0 6.86454 0 6.11415V1.3587Z"/>
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
				<Text style = {noneModeStyles._Clothes_Bin}   >
					Clothes Bin 
				</Text>
				<View style = {noneModeStyles._Rectangle_1016_container}    >
					<View style = {noneModeStyles._Rectangle_1016}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_1016_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_1018_container}    >
					<View style = {noneModeStyles._Rectangle_1018}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_1018_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_1017_container}    >
					<View style = {noneModeStyles._Rectangle_1017}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_1017_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_1019_container}    >
					<View style = {noneModeStyles._Rectangle_1019}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_1019_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._eva_arrow_back_fill}    >
					<View style = {noneModeStyles._layer_e09ffb}    >
						<View style = {noneModeStyles._layer_a4306c}   >
							<Svg style={{height: 15, width: 16}} viewBox = "0 0 16 15">
								<Path fill = {"black"}     d = "M15 6.00125H3.14L6.77 1.64125C6.93974 1.43704 7.0214 1.17375 6.99702 0.909329C6.97264 0.644902 6.84422 0.400991 6.64 0.231252C6.43578 0.0615137 6.1725 -0.0201482 5.90808 0.0042315C5.64365 0.0286112 5.39974 0.157036 5.23 0.361252L0.23 6.36125C0.196361 6.40898 0.166279 6.45911 0.14 6.51125C0.14 6.56125 0.14 6.59125 0.0700002 6.64125C0.0246737 6.75591 0.000941121 6.87796 0 7.00125C0.000941121 7.12454 0.0246737 7.24659 0.0700002 7.36125C0.0700002 7.41125 0.0699999 7.44125 0.14 7.49125C0.166279 7.54339 0.196361 7.59353 0.23 7.64125L5.23 13.6413C5.32402 13.7541 5.44176 13.8449 5.57485 13.9071C5.70793 13.9694 5.85309 14.0015 6 14.0013C6.23365 14.0017 6.46009 13.9203 6.64 13.7713C6.74126 13.6873 6.82496 13.5842 6.88631 13.4679C6.94766 13.3515 6.98546 13.2242 6.99754 13.0932C7.00961 12.9622 6.99573 12.8302 6.95669 12.7046C6.91764 12.579 6.8542 12.4623 6.77 12.3613L3.14 8.00125H15C15.2652 8.00125 15.5196 7.8959 15.7071 7.70836C15.8946 7.52082 16 7.26647 16 7.00125C16 6.73604 15.8946 6.48168 15.7071 6.29415C15.5196 6.10661 15.2652 6.00125 15 6.00125Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_998}    >
				</View>
				<Text style = {noneModeStyles._Add_New_Item}   >
					Add New Item
				</Text>
				<View style = {noneModeStyles._plus_1}    >
					<View style = {noneModeStyles._layer_2ce9d3}    >
						<View style = {noneModeStyles._layer_b8d9f4}   >
							<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
								<Path fill = {"#FDFDFD"}     d = "M8.5 0C3.81291 0 0 3.81291 0 8.5C0 13.1871 3.81291 17 8.5 17C13.1871 17 17 13.1871 17 8.5C17 3.81291 13.1871 0 8.5 0ZM12.2188 9.20829H9.20829V12.2188C9.20829 12.6098 8.89104 12.927 8.5 12.927C8.10896 12.927 7.79171 12.6098 7.79171 12.2188V9.20829H4.78125C4.39021 9.20829 4.07296 8.89104 4.07296 8.5C4.07296 8.10896 4.39021 7.79171 4.78125 7.79171H7.79171V4.78125C7.79171 4.39021 8.10896 4.07296 8.5 4.07296C8.89104 4.07296 9.20829 4.39021 9.20829 4.78125V7.79171H12.2188C12.6098 7.79171 12.927 8.10896 12.927 8.5C12.927 8.89104 12.6098 9.20829 12.2188 9.20829Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_1021}    >
				</View>
				<Text style = {noneModeStyles._Pickup}   >
					Pickup
				</Text>
				<View style = {noneModeStyles._layer_d68c8a}    >
					<View style = {noneModeStyles._layer_e579df}   >
						<Svg style={{height: 54, width: 2}} viewBox = "0 0 2 54">
							<Path fill = {"none"}   stroke = {"#7E7E7C"}  d = "M1.01869 0.00481862L0.509343 53.9952"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_e0ed9c}    >
					<View style = {noneModeStyles._layer_2b1723}   >
						<Svg style={{height: 1, width: 330}} viewBox = "0 0 330 1">
							<Path fill = {"none"}   stroke = {"#7E7E7C"}  d = "M330 0.5L0 0.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._logistics_delivery_truck_in_movement_2}    >
					<View style = {noneModeStyles._Group}    >
						<View style = {noneModeStyles._Group_2}    >
							<View style = {noneModeStyles._layer_074328}    >
								<View style = {noneModeStyles._layer_e24e36}   >
									<Svg style={{height: 13, width: 22}} viewBox = "0 0 22 13">
										<Path fill = {"white"}     d = "M8.15165 8.66117C7.13616 8.66117 6.31551 9.48473 6.31551 10.5003C6.31551 11.5128 7.13616 12.3364 8.15165 12.3364C9.16713 12.3364 9.98779 11.5128 9.98779 10.5003C9.98775 9.48473 9.16713 8.66117 8.15165 8.66117ZM8.15165 11.4183C7.64389 11.4183 7.23354 11.005 7.23354 10.5002C7.23354 9.99249 7.64389 9.58211 8.15165 9.58211C8.65937 9.58211 9.06972 9.99249 9.06972 10.5002C9.06968 11.005 8.65937 11.4183 8.15165 11.4183ZM22 7.30274V9.26336C22 9.75243 21.6035 10.1489 21.1144 10.1489H20.1668C19.9956 8.97402 18.9831 8.07072 17.7609 8.07072C16.5418 8.07072 15.5292 8.97406 15.358 10.1489H10.5551C10.3839 8.97402 9.37139 8.07072 8.15222 8.07072C6.93306 8.07072 5.92052 8.97406 5.74933 10.1489H4.56263C4.07352 10.1489 3.67706 9.75247 3.67706 9.26336V7.30274H22ZM17.7633 8.66117C16.7478 8.66117 15.9242 9.48473 15.9242 10.5003C15.9242 11.5128 16.7479 12.3364 17.7633 12.3364C18.7758 12.3364 19.5994 11.5128 19.5994 10.5003C19.5994 9.48473 18.7758 8.66117 17.7633 8.66117ZM17.7633 11.4183C17.2556 11.4183 16.8452 11.005 16.8452 10.5002C16.8452 9.99249 17.2556 9.58211 17.7633 9.58211C18.2681 9.58211 18.6814 9.99249 18.6814 10.5002C18.6814 11.005 18.2681 11.4183 17.7633 11.4183ZM21.6511 5.32835L18.1707 1.88632C17.9493 1.66787 17.6512 1.54388 17.3412 1.54388H15.5848V0.885571C15.5848 0.395568 15.1892 0 14.6992 0H4.56202C4.07492 0 3.67644 0.395604 3.67644 0.885571V1.02433L0.0826797 1.43852L6.45067 2.26776L0 2.90856L6.42795 3.82246L0 4.3798L3.67666 5.07323L3.67641 6.8132H21.9994V6.16668C21.9994 5.85081 21.8725 5.54975 21.6511 5.32835ZM20.1337 5.44345H16.7655C16.6888 5.44345 16.6268 5.38148 16.6268 5.30473V2.70402C16.6268 2.62727 16.6888 2.56526 16.7655 2.56526H17.4061C17.4415 2.56526 17.477 2.58004 17.5036 2.60366L20.2282 5.20436C20.3197 5.28995 20.2577 5.44345 20.1337 5.44345Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5245}    >
					<View style = {noneModeStyles._Rectangle_1020}    >
					</View>
					<Text style = {noneModeStyles._Request_Delivery}   >
						Request Delivery
					</Text>
					<View style = {noneModeStyles._bx_bxs_box}    >
						<View style = {noneModeStyles._layer_cc06c2}    >
							<View style = {noneModeStyles._layer_e610f9}   >
								<Svg style={{height: 17, width: 19}} viewBox = "0 0 19 17">
									<Path fill = {"white"}     d = "M0 0H18.8889V3.77778H0V0ZM16.0556 4.72222H0.944444V15.1111C0.944444 15.6121 1.14345 16.0925 1.49769 16.4468C1.85192 16.801 2.33237 17 2.83333 17H16.0556C16.5565 17 17.037 16.801 17.3912 16.4468C17.7454 16.0925 17.9444 15.6121 17.9444 15.1111V4.72222H16.0556ZM13.2222 10.3889H5.66667V8.5H13.2222V10.3889Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_1010_container}    >
					<View style = {noneModeStyles._Rectangle_1010}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_1010_link}}/>
					</View>
				</View>
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
							<View style = {noneModeStyles._layer_cd4c0f}    >
								<View style = {noneModeStyles._layer_9abdb8}   >
									<Svg style={{height: 20, width: 19}} viewBox = "0 0 19 20">
										<Path fill = {"#353535"}     d = "M18.6711 12.1917L16.8777 10.7542C16.9004 10.5325 16.9199 10.2734 16.9199 9.99918C16.9199 9.725 16.9012 9.46586 16.8777 9.24418L18.6727 7.80586C19.0061 7.53586 19.0971 7.05668 18.8849 6.65754L17.0199 3.35C16.8207 2.97668 16.3842 2.785 15.9411 2.9525L13.8249 3.82332C13.4193 3.52332 12.9941 3.27 12.5543 3.0675L12.2323 0.76668C12.1795 0.33 11.8087 0 11.3706 0H7.6309C7.19269 0 6.82282 0.33 6.77076 0.76L6.44802 3.06918C6.02201 3.26586 5.60335 3.51586 5.17978 3.825L3.05791 2.95168C2.66033 2.79418 2.18474 2.97082 1.98718 3.3425L0.119802 6.65418C-0.100502 7.03586 -0.00946107 7.53168 0.331189 7.80836L2.1246 9.24586C2.09613 9.52668 2.08234 9.77086 2.08234 10C2.08234 10.2292 2.09617 10.4734 2.1246 10.755L0.32955 12.1934C-0.00378293 12.4642 -0.0940233 12.9434 0.118163 13.3417L1.98314 16.6492C2.18234 17.0217 2.61483 17.215 3.06195 17.0467L5.17814 16.1759C5.583 16.475 6.00818 16.7284 6.44802 16.9317L6.76996 19.2317C6.82278 19.67 7.19269 20 7.6317 20H11.3714C11.8096 20 12.1803 19.67 12.2323 19.24L12.5551 16.9317C12.9811 16.7342 13.3989 16.485 13.8233 16.175L15.9452 17.0483C16.0476 17.0891 16.1541 17.11 16.2639 17.11C16.5793 17.11 16.8695 16.9333 17.0159 16.6583L18.889 13.3333C19.0971 12.9433 19.006 12.4642 18.6711 12.1917ZM9.50072 13.3333C7.70731 13.3333 6.24883 11.8383 6.24883 10C6.24883 8.16168 7.70731 6.66668 9.50072 6.66668C11.2941 6.66668 12.7526 8.16168 12.7526 10C12.7526 11.8383 11.2941 13.3333 9.50072 13.3333Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_5251}    >
						<View style = {noneModeStyles._Frame_56}    >
							<View style = {noneModeStyles._layer_23085f}    >
								<View style = {noneModeStyles._layer_6e211b}   >
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
						<View style = {noneModeStyles._plus_1_2}    >
						</View>
						<View style = {noneModeStyles._layer_642f1b}    >
							<View style = {noneModeStyles._layer_17e0fb}   >
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
							<View style = {noneModeStyles._Group_3}    >
								<View style = {noneModeStyles._Group_4}    >
									<View style = {noneModeStyles._layer_f5049e}    >
										<View style = {noneModeStyles._layer_bc56c4}   >
											<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
												<Path fill = {"#353535"}     d = "M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0Z"/>
											</Svg>
										</View>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Group_5}    >
								<View style = {noneModeStyles._Group_6}    >
									<View style = {noneModeStyles._layer_460c5b}    >
										<View style = {noneModeStyles._layer_60976e}   >
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
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Home_2_2

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(217, 217, 217)",
	},
_viewport: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(217, 217, 217)",
	},
_Accessories_Bin: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: -2057,
	top: -1501,
	color: "rgb(50, 50, 50)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_layer_731db4: {
	width: 375,
	height: 100,
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_204b4b: {
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
	width: 23.8739,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateX: 329.728},
		{translateY: 16.3333},
	],
	},
_layer_767a8d: {
	height: 11.3333,
	position: "absolute",
	top: 0,
	},
_layer_36f9dc: {
	},
_layer_cf6b85: {
	height: 4,
	position: "absolute",
	top: 3.66666,
	transform: [
		{translateX: 22.5707},
	],
	},
_layer_0fc021: {
	},
_layer_f0c1fd: {
	height: 7.33334,
	position: "absolute",
	top: 2,
	transform: [
		{translateX: 1.96265},
	],
	},
_layer_5734cf: {
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
_Clothes_Bin: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 136,
	top: 59,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Rectangle_1016_container: {
	width: 150,
	height: 150,
	position: "absolute",
	left: 23,
	top: 192,
	},
_Rectangle_1016: {
	width: "100%",
	height: "100%",
	borderRadius: 5,
	},
_Rectangle_1018_container: {
	width: 150,
	height: 150,
	position: "absolute",
	left: 23,
	top: 359,
	},
_Rectangle_1018: {
	width: "100%",
	height: "100%",
	borderRadius: 5,
	},
_Rectangle_1017_container: {
	width: 150,
	height: 150,
	position: "absolute",
	left: 202,
	top: 192,
	},
_Rectangle_1017: {
	width: "100%",
	height: "100%",
	borderRadius: 5,
	},
_Rectangle_1019_container: {
	width: 150,
	height: 150,
	position: "absolute",
	left: 202,
	top: 359,
	},
_Rectangle_1019: {
	width: "100%",
	height: "100%",
	borderRadius: 5,
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
_layer_e09ffb: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4.99875},
	],
	},
_layer_a4306c: {
	},
_Rectangle_998: {
	width: 331,
	height: 55,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 22,
	top: 657,
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 11,
	},
_Add_New_Item: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 111,
	top: 671,
	color: "rgb(253, 253, 253)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_plus_1: {
	width: 17,
	height: 17,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 248,
	top: 676,
	},
_layer_2ce9d3: {
	position: "absolute",
	},
_layer_b8d9f4: {
	},
_Rectangle_1021: {
	width: 147,
	height: 40,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 23,
	top: 107,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(229, 229, 229)",
	borderRadius: 7,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 19,
	},
_Pickup: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 70,
	top: 118,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_layer_d68c8a: {
	width: 0.5,
	height: 53,
	position: "absolute",
	left: 187.5,
	top: 104,
	},
_layer_e579df: {
	},
_layer_e0ed9c: {
	width: 330,
	height: 0,
	position: "absolute",
	left: 23,
	top: 157,
	},
_layer_2b1723: {
	},
_logistics_delivery_truck_in_movement_2: {
	width: 22,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 34,
	top: 116,
	},
_Group: {
	width: 22,
	height: 12.3364,
	position: "absolute",
	transform: [
		{translateY: 4.83176},
	],
	},
_Group_2: {
	width: 22,
	height: 12.3364,
	position: "absolute",
	},
_layer_074328: {
	position: "absolute",
	},
_layer_e24e36: {
	},
_Group_5245: {
	width: 147,
	height: 40,
	position: "absolute",
	left: 206,
	top: 107,
	},
_Rectangle_1020: {
	width: 147,
	height: 40,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 0,
	top: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(229, 229, 229)",
	borderRadius: 7,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 19,
	},
_Request_Delivery: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 38,
	top: 11,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_bx_bxs_box: {
	width: 22,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 9,
	top: 12,
	},
_layer_cc06c2: {
	position: "absolute",
	transform: [
		{translateX: 4},
	],
	},
_layer_e610f9: {
	},
_Rectangle_1010_container: {
	width: 150,
	height: 150,
	position: "absolute",
	left: 23,
	top: 192,
	},
_Rectangle_1010: {
	width: "100%",
	height: "100%",
	borderRadius: 4,
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
	shadowColor: "rgba(170,170,170,0.25)",
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
_layer_cd4c0f: {
	position: "absolute",
	},
_layer_9abdb8: {
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
_layer_23085f: {
	position: "absolute",
	},
_layer_6e211b: {
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
_plus_1_2: {
	width: 19,
	height: 19,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 14},
	],
	},
_layer_642f1b: {
	position: "absolute",
	transform: [
		{translateX: 14},
	],
	},
_layer_17e0fb: {
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
_Group_3: {
	width: 9.49219,
	height: 9.49219,
	position: "absolute",
	transform: [
		{translateX: 4},
	],
	},
_Group_4: {
	width: 9.49219,
	height: 9.49219,
	position: "absolute",
	},
_layer_f5049e: {
	position: "absolute",
	},
_layer_bc56c4: {
	},
_Group_5: {
	width: 15.8203,
	height: 7.45312,
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 10.5469},
	],
	},
_Group_6: {
	width: 15.8203,
	height: 7.45312,
	position: "absolute",
	},
_layer_460c5b: {
	position: "absolute",
	},
_layer_60976e: {
	},
})

