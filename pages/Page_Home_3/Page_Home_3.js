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
import {image_Attachment_1630674196_2_link} from './assets/imageLinks.js'
import {image_Rectangle_1010_link} from './assets/imageLinks.js'
const Page_Home_3  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page5}    >
			<View style = {noneModeStyles._Attachment_1630674196_2_container}    >
				<View style = {noneModeStyles._Attachment_1630674196_2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Attachment_1630674196_2_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Jhon_Doe}   >
				Jhon Doe
			</Text>
			<View style = {noneModeStyles._Rectangle_1010_container}    >
				<View style = {noneModeStyles._Rectangle_1010}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_1010_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_13}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1012}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1013}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1014}    >
			</View>
			<Text style = {noneModeStyles.____Road_st__Arizona__AZ__1212}   >
				###Road st, Arizona, AZ, 1212
			</Text>
			<Text style = {noneModeStyles._042_232323232323}   >
				042 232323232323
			</Text>
			<Text style = {noneModeStyles._jhon_tx_email_com}   >
				jhon.tx@email.com
			</Text>
			<Text style = {noneModeStyles._Paid}   >
				Paid
			</Text>
			<Text style = {noneModeStyles._Email}   >
				Email
			</Text>
			<Text style = {noneModeStyles._Membership}   >
				Membership
			</Text>
			<Text style = {noneModeStyles._Address}   >
				Address
			</Text>
			<Text style = {noneModeStyles._Phone_No}   >
				Phone No
			</Text>
			<View style = {noneModeStyles._Group_5225}    >
				<View style = {noneModeStyles._Ellipse_2}    >
				</View>
				<View style = {noneModeStyles.style20}    >
					<View style = {noneModeStyles.style21}   >
						<Svg style={{height: 4, width: 4}} viewBox = "0 0 4 4">
							<Path fill = {"white"}     d = "M1.7233 0C1.55301 0 1.37591 0.0681145 1.2465 0.197532L0 1.44403L2.55429 3.99832L3.80079 2.75183C4.06644 2.48618 4.06644 2.05706 3.80079 1.79141L2.20691 0.197532C2.07068 0.061303 1.90039 0 1.7233 0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style22}    >
					<View style = {noneModeStyles.style23}   >
						<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
							<Path fill = {"white"}     d = "M7.46793 0L0 7.46793V10H2.53207L10 2.53207L7.46793 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<View style = {noneModeStyles._navigation_status_bar_light}    >
				<View style = {noneModeStyles._Battery}    >
					<View style = {noneModeStyles.style27}    >
						<View style = {noneModeStyles.style28}   >
							<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
								<Path fill = {"none"}   stroke = {"#010101"}  d = "M0.50951 2.71739C0.50951 1.49801 1.49801 0.50951 2.71739 0.50951H19.2826C20.502 0.50951 21.4905 1.49801 21.4905 2.71739V8.83151C21.4905 10.0509 20.502 11.0394 19.2826 11.0394H2.71738C1.49801 11.0394 0.50951 10.0509 0.50951 8.83151V2.71739Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style29}    >
						<View style = {noneModeStyles.style30}   >
							<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
								<Path fill = {"black"}     d = "M0 0V4C0.789713 3.66122 1.30325 2.87313 1.30325 2C1.30325 1.12687 0.789713 0.338777 0 0Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style31}    >
						<View style = {noneModeStyles.style32}   >
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
			<Text style = {noneModeStyles._Profile}   >
				Profile
			</Text>
			<View style = {noneModeStyles._ic_baseline_email}    >
				<View style = {noneModeStyles.style38}    >
					<View style = {noneModeStyles.style39}   >
						<Svg style={{height: 16, width: 20}} viewBox = "0 0 20 16">
							<Path fill = {"#F15528"}     d = "M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._ic_baseline_card_membership}    >
				<View style = {noneModeStyles.style41}    >
					<View style = {noneModeStyles.style42}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"#F15528"}     d = "M18 0H2C0.89 0 0 0.89 0 2V13C0 14.11 0.89 15 2 15H6V20L10 18L14 20V15H18C19.11 15 20 14.11 20 13V2C20 0.89 19.11 0 18 0ZM18 13H2V11H18V13ZM18 8H2V2H18V8Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._heroicons_solid_menu_alt_3}    >
				<View style = {noneModeStyles._heroicons_solid_menu_alt_3_2}    >
					<View style = {noneModeStyles._Group}    >
						<View style = {noneModeStyles._Group_2}    >
							<View style = {noneModeStyles.style47}    >
								<View style = {noneModeStyles.style48}   >
									<Svg style={{height: 3, width: 17}} viewBox = "0 0 17 3">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M17 1.21429C17 0.892238 16.8721 0.58338 16.6443 0.355657C16.4166 0.127934 16.1078 0 15.7857 0H1.21427C0.892227 0 0.583367 0.127934 0.355644 0.355657C0.12792 0.58338 -1.15803e-05 0.892238 -1.15803e-05 1.21429C-1.15803e-05 1.53634 0.12792 1.84519 0.355644 2.07292C0.583367 2.30064 0.892227 2.42857 1.21427 2.42857H15.7857C16.1078 2.42857 16.4166 2.30064 16.6443 2.07292C16.8721 1.84519 17 1.53634 17 1.21429Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style49}    >
								<View style = {noneModeStyles.style50}   >
									<Svg style={{height: 3, width: 17}} viewBox = "0 0 17 3">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M17 1.21429C17 0.892238 16.8721 0.58338 16.6443 0.355657C16.4166 0.127934 16.1078 0 15.7857 0H1.21427C0.892227 0 0.583367 0.127934 0.355644 0.355657C0.12792 0.58338 -1.15803e-05 0.892238 -1.15803e-05 1.21429C-1.15803e-05 1.53634 0.12792 1.84519 0.355644 2.07292C0.583367 2.30064 0.892227 2.42857 1.21427 2.42857H15.7857C16.1078 2.42857 16.4166 2.30064 16.6443 2.07292C16.8721 1.84519 17 1.53634 17 1.21429Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style51}    >
								<View style = {noneModeStyles.style52}   >
									<Svg style={{height: 3, width: 10}} viewBox = "0 0 10 3">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M10 1.25C10 0.918482 9.8683 0.600539 9.63388 0.366118C9.39946 0.131697 9.08152 0 8.75 0H1.24998C0.918457 0 0.600512 0.131697 0.366092 0.366118C0.131671 0.600539 -2.48353e-05 0.918482 -2.48353e-05 1.25C-2.48353e-05 1.58152 0.131671 1.89947 0.366092 2.13389C0.600512 2.36831 0.918457 2.50001 1.24998 2.50001H8.75C9.08152 2.50001 9.39946 2.36831 9.63388 2.13389C9.8683 1.89947 10 1.58152 10 1.25Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._el_address_book}    >
				<View style = {noneModeStyles.style54}    >
					<View style = {noneModeStyles.style55}   >
						<Svg style={{height: 24, width: 24}} viewBox = "0 0 24 24">
							<Path fill = {"#F15528"}     d = "M0.00016 0.00028V24H24V19.7513H21.3867V17.4146H24V13.1675H21.3867V10.8309H24V6.58562H21.3867V4.249H24L23.9997 0H0L0.00016 0.00028ZM10.6935 4.19148C12.6091 4.19148 14.1609 5.74508 14.1609 7.6608C14.1609 9.01842 13.3815 10.1933 12.2453 10.763L16.6856 13.4215H16.7395V17.171H4.6456V13.4215H4.70128L9.13964 10.763C8.0034 10.1933 7.22404 9.0184 7.22404 7.6608C7.22404 5.7451 8.77764 4.19148 10.6934 4.19148H10.6935Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._carbon_phone_filled}    >
				<View style = {noneModeStyles.style57}    >
					<View style = {noneModeStyles.style58}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"#F15528"}     d = "M13.3342 14.2081L15.0564 12.4859C15.2883 12.2568 15.5818 12.1 15.9012 12.0345C16.2205 11.969 16.552 11.9976 16.8554 12.1169L18.9544 12.9549C19.261 13.0794 19.5239 13.2918 19.71 13.5655C19.896 13.8391 19.9969 14.1617 20 14.4926V18.3368C19.9982 18.5619 19.9509 18.7843 19.8609 18.9906C19.7709 19.1969 19.64 19.3829 19.4763 19.5374C19.3125 19.6918 19.1192 19.8115 18.9079 19.8892C18.6966 19.967 18.4718 20.0012 18.247 19.9898C3.5392 19.0749 0.571489 6.61971 0.0102389 1.85293C-0.0158147 1.61884 0.00798983 1.3819 0.0800863 1.15768C0.152183 0.933453 0.270937 0.727037 0.428537 0.552007C0.586137 0.376976 0.779011 0.237298 0.99447 0.142161C1.20993 0.0470248 1.44309 -0.00141401 1.67861 3.14216e-05H5.39209C5.72347 0.00101229 6.04697 0.101108 6.321 0.287445C6.59502 0.473782 6.80703 0.737837 6.92976 1.04565L7.76779 3.14457C7.891 3.44678 7.92244 3.77859 7.85817 4.09855C7.7939 4.41852 7.63679 4.71245 7.40644 4.94365L5.68425 6.66584C5.68425 6.66584 6.67605 13.3778 13.3342 14.2081Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_5267}    >
				<View style = {noneModeStyles._Rectangle_1036}    >
					<View style = {noneModeStyles._Rectangle_3}    >
					</View>
				</View>
				<View style = {noneModeStyles._Group_5260}    >
					<View style = {noneModeStyles._Settings}    >
						<Text style = {noneModeStyles._Settings_2}   >
							Settings
						</Text>
					</View>
					<View style = {noneModeStyles._Frame_57}    >
						<View style = {noneModeStyles.style66}    >
							<View style = {noneModeStyles.style67}   >
								<Svg style={{height: 20, width: 19}} viewBox = "0 0 19 20">
									<Path fill = {"#353535"}     d = "M18.6711 12.1917L16.8777 10.7542C16.9004 10.5325 16.9199 10.2734 16.9199 9.99918C16.9199 9.725 16.9012 9.46586 16.8777 9.24418L18.6727 7.80586C19.0061 7.53586 19.0971 7.05668 18.8849 6.65754L17.0199 3.35C16.8207 2.97668 16.3842 2.785 15.9411 2.9525L13.8249 3.82332C13.4193 3.52332 12.9941 3.27 12.5543 3.0675L12.2323 0.76668C12.1795 0.33 11.8087 0 11.3706 0H7.6309C7.19269 0 6.82282 0.33 6.77076 0.76L6.44802 3.06918C6.02201 3.26586 5.60335 3.51586 5.17978 3.825L3.05791 2.95168C2.66033 2.79418 2.18474 2.97082 1.98718 3.3425L0.119802 6.65418C-0.100502 7.03586 -0.00946107 7.53168 0.331189 7.80836L2.1246 9.24586C2.09613 9.52668 2.08234 9.77086 2.08234 10C2.08234 10.2292 2.09617 10.4734 2.1246 10.755L0.32955 12.1934C-0.00378293 12.4642 -0.0940233 12.9434 0.118163 13.3417L1.98314 16.6492C2.18234 17.0217 2.61483 17.215 3.06195 17.0467L5.17814 16.1759C5.583 16.475 6.00818 16.7284 6.44802 16.9317L6.76996 19.2317C6.82278 19.67 7.19269 20 7.6317 20H11.3714C11.8096 20 12.1803 19.67 12.2323 19.24L12.5551 16.9317C12.9811 16.7342 13.3989 16.485 13.8233 16.175L15.9452 17.0483C16.0476 17.0891 16.1541 17.11 16.2639 17.11C16.5793 17.11 16.8695 16.9333 17.0159 16.6583L18.889 13.3333C19.0971 12.9433 19.006 12.4642 18.6711 12.1917ZM9.50072 13.3333C7.70731 13.3333 6.24883 11.8383 6.24883 10C6.24883 8.16168 7.70731 6.66668 9.50072 6.66668C11.2941 6.66668 12.7526 8.16168 12.7526 10C12.7526 11.8383 11.2941 13.3333 9.50072 13.3333Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5261}    >
					<View style = {noneModeStyles._Frame_56}    >
						<View style = {noneModeStyles.style70}    >
							<View style = {noneModeStyles.style71}   >
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
				<View style = {noneModeStyles._Group_5262}    >
					<View style = {noneModeStyles._Add_Bin}    >
						<Text style = {noneModeStyles._Add_Bin_2}   >
							Add Bin
						</Text>
					</View>
					<View style = {noneModeStyles._plus_1}    >
					</View>
					<View style = {noneModeStyles.style78}    >
						<View style = {noneModeStyles.style79}   >
							<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
								<Path fill = {"#353535"}     d = "M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0ZM14.375 10.8333H10.8333V14.375C10.8333 14.8351 10.4601 15.2083 10 15.2083C9.53995 15.2083 9.16672 14.8351 9.16672 14.375V10.8333H5.625C5.16495 10.8333 4.79172 10.4601 4.79172 10C4.79172 9.53995 5.16495 9.16672 5.625 9.16672H9.16672V5.625C9.16672 5.16495 9.53995 4.79172 10 4.79172C10.4601 4.79172 10.8333 5.16495 10.8333 5.625V9.16672H14.375C14.8351 9.16672 15.2083 9.53995 15.2083 10C15.2083 10.4601 14.8351 10.8333 14.375 10.8333Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5223}    >
					<Text style = {noneModeStyles._Profile_2}   >
						Profile
					</Text>
				</View>
				<View style = {noneModeStyles._Rectangle_1050}    >
				</View>
				<View style = {noneModeStyles._user_1}    >
					<View style = {noneModeStyles._Group_3}    >
						<View style = {noneModeStyles._Group_4}    >
							<View style = {noneModeStyles.style86}    >
								<View style = {noneModeStyles.style87}   >
									<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
										<Path fill = {"white"}     d = "M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Group_6}    >
							<View style = {noneModeStyles.style90}    >
								<View style = {noneModeStyles.style91}   >
									<Svg style={{height: 8, width: 16}} viewBox = "0 0 16 8">
										<Path fill = {"white"}     d = "M13.9721 2.06916C12.658 0.734827 10.9159 0 9.06667 0H6.93333C5.08416 0 3.34201 0.734827 2.02788 2.06916C0.720178 3.39694 0 5.14962 0 7.00444C0 7.29899 0.238791 7.53778 0.533333 7.53778H15.4667C15.7612 7.53778 16 7.29899 16 7.00444C16 5.14962 15.2798 3.39694 13.9721 2.06916Z"/>
									</Svg>
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
export default Page_Home_3

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(217, 217, 217)",
	},
_Attachment_1630674196_2_container: {
	width: 116,
	height: 25,
	position: "absolute",
	transform: [
		{translateX: 129},
		{translateY: 108},
	],
	},
_Attachment_1630674196_2: {
	width: "100%",
	height: "100%",
	},
_Jhon_Doe: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 137},
		{translateY: 271},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_1010_container: {
	width: 98,
	height: 98,
	position: "absolute",
	transform: [
		{translateX: 138},
		{translateY: 164},
	],
	},
_Rectangle_1010: {
	width: "100%",
	height: "100%",
	borderRadius: 228,
	},
_Rectangle_13: {
	width: 331,
	height: 60,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 322},
	],
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
_Rectangle_1012: {
	width: 331,
	height: 60,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 390},
	],
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
_Rectangle_1013: {
	width: 331,
	height: 60,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 456},
	],
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
_Rectangle_1014: {
	width: 331,
	height: 60,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 522},
	],
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
____Road_st__Arizona__AZ__1212: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 77,
	top: 488,
	color: "rgb(101, 93, 93)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_042_232323232323: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 77,
	top: 554,
	color: "rgb(101, 93, 93)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_jhon_tx_email_com: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 77},
		{translateY: 356},
	],
	color: "rgb(101, 93, 93)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Paid: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 77},
		{translateY: 426},
	],
	color: "rgb(101, 93, 93)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Email: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 77,
	top: 336,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Membership: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 77},
		{translateY: 404},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Address: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 77},
		{translateY: 466},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Phone_No: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 77},
		{translateY: 533},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Group_5225: {
	width: 26,
	height: 26,
	position: "absolute",
	left: 210,
	top: 236,
	},
_Ellipse_2: {
	width: 26,
	height: 26,
	position: "absolute",
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 15,
	},
style20: {
	position: "absolute",
	transform: [
		{translateX: 14.9209},
		{translateY: 7.4751},
	],
	},
style21: {
	},
style22: {
	position: "absolute",
	transform: [
		{translateX: 7.47461},
		{translateY: 9.43335},
	],
	},
style23: {
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
	width: 23.8739,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateX: 329.728},
		{translateY: 16.3333},
	],
	},
style27: {
	height: 11.3333,
	position: "absolute",
	top: 0,
	},
style28: {
	},
style29: {
	height: 4,
	position: "absolute",
	top: 3.66666,
	transform: [
		{translateX: 22.5707},
	],
	},
style30: {
	},
style31: {
	height: 7.33334,
	position: "absolute",
	top: 2,
	transform: [
		{translateX: 1.96265},
	],
	},
style32: {
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
	width: 16.6827,
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
_Profile: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 159},
		{translateY: 58},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_ic_baseline_email: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 36,
	top: 340,
	},
style38: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 4},
	],
	},
style39: {
	},
_ic_baseline_card_membership: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 36,
	top: 408,
	},
style41: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 1.99999},
	],
	},
style42: {
	},
_heroicons_solid_menu_alt_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 23,
	top: 61,
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
		{translateX: 3.59991},
		{translateY: 4.79999},
	],
	},
_Group_2: {
	width: 16.8,
	height: 14.4,
	position: "absolute",
	},
style47: {
	position: "absolute",
	},
style48: {
	},
style49: {
	position: "absolute",
	transform: [
		{translateY: 6},
	],
	},
style50: {
	},
style51: {
	position: "absolute",
	transform: [
		{translateX: 0.0000610352},
		{translateY: 12},
	],
	},
style52: {
	},
_el_address_book: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 36,
	top: 474,
	},
style54: {
	position: "absolute",
	transform: [
		{translateY: 0.001091},
	],
	},
style55: {
	},
_carbon_phone_filled: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 37,
	top: 541,
	},
style57: {
	position: "absolute",
	transform: [
		{translateX: 2.24011},
		{translateY: 2.24995},
	],
	},
style58: {
	},
_Group_5267: {
	width: 375,
	height: 66,
	position: "absolute",
	left: 0,
	top: 746,
	},
_Rectangle_1036: {
	width: 375,
	height: 66,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_3: {
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
_Group_5260: {
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
style66: {
	position: "absolute",
	},
style67: {
	},
_Group_5261: {
	width: 36,
	height: 44,
	position: "absolute",
	left: 42,
	top: 13,
	},
_Frame_56: {
	width: 20,
	height: 21,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 8,
	top: 0,
	},
style70: {
	position: "absolute",
	},
style71: {
	},
_Home: {
	width: 36,
	height: 18,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 26,
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
_Group_5262: {
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
style78: {
	position: "absolute",
	transform: [
		{translateX: 14},
	],
	},
style79: {
	},
_Group_5223: {
	width: 41,
	height: 16,
	position: "absolute",
	transform: [
		{translateX: 292},
		{translateY: 41},
	],
	},
_Profile_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(241, 85, 40)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Rectangle_1050: {
	width: 30,
	height: 30,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 298,
	top: 11,
	borderRadius: 6,
	},
_user_1: {
	width: 18,
	height: 18,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 304},
		{translateY: 17},
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
style86: {
	position: "absolute",
	},
style87: {
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
style90: {
	position: "absolute",
	},
style91: {
	},
})

