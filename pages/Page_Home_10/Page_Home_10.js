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
const Page_Home_10  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles._Rectangle_998}    >
			</View>
			<View style = {noneModeStyles._Rectangle_999}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1000}    >
			</View>
			<Text style = {noneModeStyles._Stationary_Bin}   >
				Stationary Bin
			</Text>
			<Text style = {noneModeStyles._Shoes_Bin}   >
				Shoes Bin 
			</Text>
			<Text style = {noneModeStyles._Shoes_Bin_2}   >
				Shoes Bin 
			</Text>
			<Text style = {noneModeStyles._Accessories_Bin}   >
				Accessories Bin 
			</Text>
			<View style = {noneModeStyles._Rectangle_993}    >
			</View>
			<Text style = {noneModeStyles._Clothes_Bin}   >
				Clothes Bin 
			</Text>
			<View style = {noneModeStyles._fluent_delete_48_filled}    >
				<View style = {noneModeStyles._Group}    >
					<View style = {noneModeStyles.style12}    >
						<View style = {noneModeStyles.style13}   >
							<Svg style={{height: 17, width: 14}} viewBox = "0 0 14 17">
								<Path fill = {"#FCFCFC"}     d = "M7.00017 2.0716e-09C7.76797 -2.86747e-05 8.50586 0.297669 9.05869 0.83049C9.61151 1.36331 9.93619 2.08974 9.96445 2.85702L9.96634 2.96665L13.1698 2.96617C13.3841 2.96627 13.5901 3.04919 13.7446 3.19759C13.8992 3.34599 13.9904 3.5484 13.9993 3.7625C14.0081 3.9766 13.9338 4.18583 13.792 4.34645C13.6501 4.50707 13.4517 4.60665 13.2382 4.62438L13.1698 4.62723H12.616L11.8438 14.8641C11.8055 15.3713 11.577 15.8453 11.204 16.1912C10.831 16.537 10.3412 16.7292 9.83251 16.7292H4.16783C3.65917 16.7292 3.16929 16.537 2.79632 16.1912C2.42335 15.8453 2.19483 15.3713 2.15653 14.8641L1.3839 4.62723H0.830529C0.622019 4.62721 0.421144 4.54877 0.267806 4.40747C0.114468 4.26618 0.0198855 4.07238 0.00284732 3.86457L0 3.7967C1.75915e-05 3.58819 0.0784642 3.38732 0.219757 3.23398C0.36105 3.08064 0.55485 2.98606 0.762663 2.96902L0.830529 2.96617H4.034C4.034 1.40098 5.24657 0.118647 6.78376 0.00759331L6.89149 0.00189844L7.00017 2.0716e-09ZM8.77987 6.16964C8.63301 6.16957 8.49134 6.22399 8.38228 6.32235C8.27322 6.42071 8.20453 6.55603 8.18949 6.70213L8.18664 6.76287V12.4579L8.18949 12.5187C8.2039 12.6653 8.27232 12.8012 8.38145 12.9001C8.49057 12.9991 8.63259 13.0539 8.77987 13.0539C8.92716 13.0539 9.06918 12.9991 9.1783 12.9001C9.28742 12.8012 9.35585 12.6653 9.37026 12.5187L9.37311 12.4579V6.76287L9.37026 6.70213C9.35522 6.55603 9.28653 6.42071 9.17747 6.32235C9.06841 6.22399 8.92674 6.16957 8.77987 6.16964ZM5.22047 6.16964C5.0736 6.16957 4.93193 6.22399 4.82287 6.32235C4.71381 6.42071 4.64512 6.55603 4.63008 6.70213L4.62723 6.76287V12.4579L4.63008 12.5187C4.64449 12.6653 4.71292 12.8012 4.82204 12.9001C4.93116 12.9991 5.07318 13.0539 5.22047 13.0539C5.36775 13.0539 5.50977 12.9991 5.61889 12.9001C5.72802 12.8012 5.79644 12.6653 5.81085 12.5187L5.8137 12.4579V6.76287L5.81085 6.70213C5.79581 6.55603 5.72712 6.42071 5.61806 6.32235C5.509 6.22399 5.36733 6.16957 5.22047 6.16964ZM7.0799 1.66343L7.00017 1.66106C6.66782 1.66104 6.34799 1.78782 6.10591 2.01552C5.86382 2.24323 5.71773 2.55472 5.69743 2.88644L5.69505 2.96665L8.30529 2.96617C8.3053 2.63383 8.17853 2.31399 7.95082 2.07191C7.72311 1.82983 7.41163 1.68373 7.0799 1.66343Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._fluent_delete_48_filled_2}    >
				<View style = {noneModeStyles._Group_2}    >
					<View style = {noneModeStyles.style16}    >
						<View style = {noneModeStyles.style17}   >
							<Svg style={{height: 17, width: 14}} viewBox = "0 0 14 17">
								<Path fill = {"#FCFCFC"}     d = "M7.00017 2.0716e-09C7.76797 -2.86747e-05 8.50586 0.297669 9.05869 0.83049C9.61151 1.36331 9.93619 2.08974 9.96445 2.85702L9.96634 2.96665L13.1698 2.96617C13.3841 2.96627 13.5901 3.04919 13.7446 3.19759C13.8992 3.34599 13.9904 3.5484 13.9993 3.7625C14.0081 3.9766 13.9338 4.18583 13.792 4.34645C13.6501 4.50707 13.4517 4.60665 13.2382 4.62438L13.1698 4.62723H12.616L11.8438 14.8641C11.8055 15.3713 11.577 15.8453 11.204 16.1912C10.831 16.537 10.3412 16.7292 9.83251 16.7292H4.16783C3.65917 16.7292 3.16929 16.537 2.79632 16.1912C2.42335 15.8453 2.19483 15.3713 2.15653 14.8641L1.3839 4.62723H0.830529C0.622019 4.62721 0.421144 4.54877 0.267806 4.40747C0.114468 4.26618 0.0198855 4.07238 0.00284732 3.86457L0 3.7967C1.75915e-05 3.58819 0.0784642 3.38732 0.219757 3.23398C0.36105 3.08064 0.55485 2.98606 0.762663 2.96902L0.830529 2.96617H4.034C4.034 1.40098 5.24657 0.118647 6.78376 0.00759331L6.89149 0.00189844L7.00017 2.0716e-09ZM8.77987 6.16964C8.63301 6.16957 8.49134 6.22399 8.38228 6.32235C8.27322 6.42071 8.20453 6.55603 8.18949 6.70213L8.18664 6.76287V12.4579L8.18949 12.5187C8.2039 12.6653 8.27232 12.8012 8.38145 12.9001C8.49057 12.9991 8.63259 13.0539 8.77987 13.0539C8.92716 13.0539 9.06918 12.9991 9.1783 12.9001C9.28742 12.8012 9.35585 12.6653 9.37026 12.5187L9.37311 12.4579V6.76287L9.37026 6.70213C9.35522 6.55603 9.28653 6.42071 9.17747 6.32235C9.06841 6.22399 8.92674 6.16957 8.77987 6.16964ZM5.22047 6.16964C5.0736 6.16957 4.93193 6.22399 4.82287 6.32235C4.71381 6.42071 4.64512 6.55603 4.63008 6.70213L4.62723 6.76287V12.4579L4.63008 12.5187C4.64449 12.6653 4.71292 12.8012 4.82204 12.9001C4.93116 12.9991 5.07318 13.0539 5.22047 13.0539C5.36775 13.0539 5.50977 12.9991 5.61889 12.9001C5.72802 12.8012 5.79644 12.6653 5.81085 12.5187L5.8137 12.4579V6.76287L5.81085 6.70213C5.79581 6.55603 5.72712 6.42071 5.61806 6.32235C5.509 6.22399 5.36733 6.16957 5.22047 6.16964ZM7.0799 1.66343L7.00017 1.66106C6.66782 1.66104 6.34799 1.78782 6.10591 2.01552C5.86382 2.24323 5.71773 2.55472 5.69743 2.88644L5.69505 2.96665L8.30529 2.96617C8.3053 2.63383 8.17853 2.31399 7.95082 2.07191C7.72311 1.82983 7.41163 1.68373 7.0799 1.66343Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._fluent_delete_48_filled_3}    >
				<View style = {noneModeStyles._Group_3}    >
					<View style = {noneModeStyles.style20}    >
						<View style = {noneModeStyles.style21}   >
							<Svg style={{height: 17, width: 14}} viewBox = "0 0 14 17">
								<Path fill = {"#FCFCFC"}     d = "M7.00017 2.0716e-09C7.76797 -2.86747e-05 8.50586 0.297669 9.05869 0.83049C9.61151 1.36331 9.93619 2.08974 9.96445 2.85702L9.96634 2.96665L13.1698 2.96617C13.3841 2.96627 13.5901 3.04919 13.7446 3.19759C13.8992 3.34599 13.9904 3.5484 13.9993 3.7625C14.0081 3.9766 13.9338 4.18583 13.792 4.34645C13.6501 4.50707 13.4517 4.60665 13.2382 4.62438L13.1698 4.62723H12.616L11.8438 14.8641C11.8055 15.3713 11.577 15.8453 11.204 16.1912C10.831 16.537 10.3412 16.7292 9.83251 16.7292H4.16783C3.65917 16.7292 3.16929 16.537 2.79632 16.1912C2.42335 15.8453 2.19483 15.3713 2.15653 14.8641L1.3839 4.62723H0.830529C0.622019 4.62721 0.421144 4.54877 0.267806 4.40747C0.114468 4.26618 0.0198855 4.07238 0.00284732 3.86457L0 3.7967C1.75915e-05 3.58819 0.0784642 3.38732 0.219757 3.23398C0.36105 3.08064 0.55485 2.98606 0.762663 2.96902L0.830529 2.96617H4.034C4.034 1.40098 5.24657 0.118647 6.78376 0.00759331L6.89149 0.00189844L7.00017 2.0716e-09ZM8.77987 6.16964C8.63301 6.16957 8.49134 6.22399 8.38228 6.32235C8.27322 6.42071 8.20453 6.55603 8.18949 6.70213L8.18664 6.76287V12.4579L8.18949 12.5187C8.2039 12.6653 8.27232 12.8012 8.38145 12.9001C8.49057 12.9991 8.63259 13.0539 8.77987 13.0539C8.92716 13.0539 9.06918 12.9991 9.1783 12.9001C9.28742 12.8012 9.35585 12.6653 9.37026 12.5187L9.37311 12.4579V6.76287L9.37026 6.70213C9.35522 6.55603 9.28653 6.42071 9.17747 6.32235C9.06841 6.22399 8.92674 6.16957 8.77987 6.16964ZM5.22047 6.16964C5.0736 6.16957 4.93193 6.22399 4.82287 6.32235C4.71381 6.42071 4.64512 6.55603 4.63008 6.70213L4.62723 6.76287V12.4579L4.63008 12.5187C4.64449 12.6653 4.71292 12.8012 4.82204 12.9001C4.93116 12.9991 5.07318 13.0539 5.22047 13.0539C5.36775 13.0539 5.50977 12.9991 5.61889 12.9001C5.72802 12.8012 5.79644 12.6653 5.81085 12.5187L5.8137 12.4579V6.76287L5.81085 6.70213C5.79581 6.55603 5.72712 6.42071 5.61806 6.32235C5.509 6.22399 5.36733 6.16957 5.22047 6.16964ZM7.0799 1.66343L7.00017 1.66106C6.66782 1.66104 6.34799 1.78782 6.10591 2.01552C5.86382 2.24323 5.71773 2.55472 5.69743 2.88644L5.69505 2.96665L8.30529 2.96617C8.3053 2.63383 8.17853 2.31399 7.95082 2.07191C7.72311 1.82983 7.41163 1.68373 7.0799 1.66343Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._fluent_delete_48_filled_4}    >
				<View style = {noneModeStyles._Group_4}    >
					<View style = {noneModeStyles.style24}    >
						<View style = {noneModeStyles.style25}   >
							<Svg style={{height: 17, width: 14}} viewBox = "0 0 14 17">
								<Path fill = {"#FCFCFC"}     d = "M7.00017 2.0716e-09C7.76797 -2.86747e-05 8.50586 0.297669 9.05869 0.83049C9.61151 1.36331 9.93619 2.08974 9.96445 2.85702L9.96634 2.96665L13.1698 2.96617C13.3841 2.96627 13.5901 3.04919 13.7446 3.19759C13.8992 3.34599 13.9904 3.5484 13.9993 3.7625C14.0081 3.9766 13.9338 4.18583 13.792 4.34645C13.6501 4.50707 13.4517 4.60665 13.2382 4.62438L13.1698 4.62723H12.616L11.8438 14.8641C11.8055 15.3713 11.577 15.8453 11.204 16.1912C10.831 16.537 10.3412 16.7292 9.83251 16.7292H4.16783C3.65917 16.7292 3.16929 16.537 2.79632 16.1912C2.42335 15.8453 2.19483 15.3713 2.15653 14.8641L1.3839 4.62723H0.830529C0.622019 4.62721 0.421144 4.54877 0.267806 4.40747C0.114468 4.26618 0.0198855 4.07238 0.00284732 3.86457L0 3.7967C1.75915e-05 3.58819 0.0784642 3.38732 0.219757 3.23398C0.36105 3.08064 0.55485 2.98606 0.762663 2.96902L0.830529 2.96617H4.034C4.034 1.40098 5.24657 0.118647 6.78376 0.00759331L6.89149 0.00189844L7.00017 2.0716e-09ZM8.77987 6.16964C8.63301 6.16957 8.49134 6.22399 8.38228 6.32235C8.27322 6.42071 8.20453 6.55603 8.18949 6.70213L8.18664 6.76287V12.4579L8.18949 12.5187C8.2039 12.6653 8.27232 12.8012 8.38145 12.9001C8.49057 12.9991 8.63259 13.0539 8.77987 13.0539C8.92716 13.0539 9.06918 12.9991 9.1783 12.9001C9.28742 12.8012 9.35585 12.6653 9.37026 12.5187L9.37311 12.4579V6.76287L9.37026 6.70213C9.35522 6.55603 9.28653 6.42071 9.17747 6.32235C9.06841 6.22399 8.92674 6.16957 8.77987 6.16964ZM5.22047 6.16964C5.0736 6.16957 4.93193 6.22399 4.82287 6.32235C4.71381 6.42071 4.64512 6.55603 4.63008 6.70213L4.62723 6.76287V12.4579L4.63008 12.5187C4.64449 12.6653 4.71292 12.8012 4.82204 12.9001C4.93116 12.9991 5.07318 13.0539 5.22047 13.0539C5.36775 13.0539 5.50977 12.9991 5.61889 12.9001C5.72802 12.8012 5.79644 12.6653 5.81085 12.5187L5.8137 12.4579V6.76287L5.81085 6.70213C5.79581 6.55603 5.72712 6.42071 5.61806 6.32235C5.509 6.22399 5.36733 6.16957 5.22047 6.16964ZM7.0799 1.66343L7.00017 1.66106C6.66782 1.66104 6.34799 1.78782 6.10591 2.01552C5.86382 2.24323 5.71773 2.55472 5.69743 2.88644L5.69505 2.96665L8.30529 2.96617C8.3053 2.63383 8.17853 2.31399 7.95082 2.07191C7.72311 1.82983 7.41163 1.68373 7.0799 1.66343Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._12_items}   >
				12 items
			</Text>
			<Text style = {noneModeStyles._12_items_2}   >
				12 items
			</Text>
			<Text style = {noneModeStyles._07_items}   >
				07 items
			</Text>
			<Text style = {noneModeStyles._05_items}   >
				05 items
			</Text>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<View style = {noneModeStyles._navigation_status_bar_light}    >
				<View style = {noneModeStyles._Battery}    >
					<View style = {noneModeStyles.style33}    >
						<View style = {noneModeStyles.style34}   >
							<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
								<Path fill = {"none"}   stroke = {"#010101"}  d = "M0.50951 2.71739C0.50951 1.49801 1.49801 0.50951 2.71739 0.50951H19.2826C20.502 0.50951 21.4905 1.49801 21.4905 2.71739V8.83151C21.4905 10.0509 20.502 11.0394 19.2826 11.0394H2.71738C1.49801 11.0394 0.50951 10.0509 0.50951 8.83151V2.71739Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style35}    >
						<View style = {noneModeStyles.style36}   >
							<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
								<Path fill = {"black"}     d = "M0 0V4C0.789713 3.66122 1.30325 2.87313 1.30325 2C1.30325 1.12687 0.789713 0.338777 0 0Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style37}    >
						<View style = {noneModeStyles.style38}   >
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
			<Text style = {noneModeStyles._My_Bins}   >
				My Bins
			</Text>
			<View style = {noneModeStyles._heroicons_solid_menu_alt_3}    >
				<View style = {noneModeStyles._heroicons_solid_menu_alt_3_2}    >
					<View style = {noneModeStyles._Group_5}    >
						<View style = {noneModeStyles._Group_6}    >
							<View style = {noneModeStyles.style47}    >
								<View style = {noneModeStyles.style48}   >
									<Svg style={{height: 3, width: 17}} viewBox = "0 0 17 3">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M17 1.21428C17 0.892235 16.8721 0.583377 16.6443 0.355655C16.4166 0.127933 16.1078 0 15.7857 0H1.21433C0.892285 0 0.583427 0.127933 0.355704 0.355655C0.127982 0.583377 5.01813e-05 0.892235 5.01813e-05 1.21428C5.01813e-05 1.53633 0.127982 1.84519 0.355704 2.07291C0.583427 2.30063 0.892285 2.42856 1.21433 2.42856H15.7857C16.1078 2.42856 16.4166 2.30063 16.6443 2.07291C16.8721 1.84519 17 1.53633 17 1.21428Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles.style49}    >
								<View style = {noneModeStyles.style50}   >
									<Svg style={{height: 3, width: 17}} viewBox = "0 0 17 3">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M17 1.21428C17 0.892235 16.8721 0.583377 16.6443 0.355655C16.4166 0.127933 16.1078 0 15.7857 0H1.21433C0.892285 0 0.583427 0.127933 0.355704 0.355655C0.127982 0.583377 5.01813e-05 0.892235 5.01813e-05 1.21428C5.01813e-05 1.53633 0.127982 1.84519 0.355704 2.07291C0.583427 2.30063 0.892285 2.42856 1.21433 2.42856H15.7857C16.1078 2.42856 16.4166 2.30063 16.6443 2.07291C16.8721 1.84519 17 1.53633 17 1.21428Z"/>
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
			<View style = {noneModeStyles._Group_5266}    >
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
						<View style = {noneModeStyles.style60}    >
							<View style = {noneModeStyles.style61}   >
								<Svg style={{height: 20, width: 19}} viewBox = "0 0 19 20">
									<Path fill = {"#353535"}     d = "M18.6711 12.1917L16.8777 10.7542C16.9004 10.5325 16.9199 10.2734 16.9199 9.99918C16.9199 9.725 16.9012 9.46586 16.8777 9.24418L18.6727 7.80586C19.0061 7.53586 19.0971 7.05668 18.8849 6.65754L17.0199 3.35C16.8207 2.97668 16.3842 2.785 15.9411 2.9525L13.8249 3.82332C13.4193 3.52332 12.9941 3.27 12.5543 3.0675L12.2323 0.76668C12.1795 0.33 11.8087 0 11.3706 0H7.6309C7.19269 0 6.82282 0.33 6.77076 0.76L6.44802 3.06918C6.02201 3.26586 5.60335 3.51586 5.17978 3.825L3.05791 2.95168C2.66033 2.79418 2.18474 2.97082 1.98718 3.3425L0.119802 6.65418C-0.100502 7.03586 -0.00946107 7.53168 0.331189 7.80836L2.1246 9.24586C2.09613 9.52668 2.08234 9.77086 2.08234 10C2.08234 10.2292 2.09617 10.4734 2.1246 10.755L0.32955 12.1934C-0.00378293 12.4642 -0.0940233 12.9434 0.118163 13.3417L1.98314 16.6492C2.18234 17.0217 2.61483 17.215 3.06195 17.0467L5.17814 16.1759C5.583 16.475 6.00818 16.7284 6.44802 16.9317L6.76996 19.2317C6.82278 19.67 7.19269 20 7.6317 20H11.3714C11.8096 20 12.1803 19.67 12.2323 19.24L12.5551 16.9317C12.9811 16.7342 13.3989 16.485 13.8233 16.175L15.9452 17.0483C16.0476 17.0891 16.1541 17.11 16.2639 17.11C16.5793 17.11 16.8695 16.9333 17.0159 16.6583L18.889 13.3333C19.0971 12.9433 19.006 12.4642 18.6711 12.1917ZM9.50072 13.3333C7.70731 13.3333 6.24883 11.8383 6.24883 10C6.24883 8.16168 7.70731 6.66668 9.50072 6.66668C11.2941 6.66668 12.7526 8.16168 12.7526 10C12.7526 11.8383 11.2941 13.3333 9.50072 13.3333Z"/>
								</Svg>
							</View>
						</View>
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
					<View style = {noneModeStyles.style66}    >
						<View style = {noneModeStyles.style67}   >
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
						<View style = {noneModeStyles._Group_7}    >
							<View style = {noneModeStyles._Group_8}    >
								<View style = {noneModeStyles.style74}    >
									<View style = {noneModeStyles.style75}   >
										<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
											<Path fill = {"#353535"}     d = "M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Group_9}    >
							<View style = {noneModeStyles._Group_10}    >
								<View style = {noneModeStyles.style78}    >
									<View style = {noneModeStyles.style79}   >
										<Svg style={{height: 8, width: 16}} viewBox = "0 0 16 8">
											<Path fill = {"#353535"}     d = "M13.9721 2.06916C12.658 0.734827 10.9159 0 9.06667 0H6.93333C5.08416 0 3.34201 0.734827 2.02788 2.06916C0.720178 3.39694 0 5.14962 0 7.00444C0 7.29899 0.238791 7.53778 0.533333 7.53778H15.4667C15.7612 7.53778 16 7.29899 16 7.00444C16 5.14962 15.2798 3.39694 13.9721 2.06916Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Group_5264}    >
					<View style = {noneModeStyles._Home}    >
						<Text style = {noneModeStyles._Home_2}   >
							Home
						</Text>
					</View>
					<View style = {noneModeStyles._Rectangle_1048}    >
					</View>
					<View style = {noneModeStyles._Frame_56}    >
						<View style = {noneModeStyles.style85}    >
							<View style = {noneModeStyles.style86}   >
								<Svg style={{height: 17, width: 16}} viewBox = "0 0 16 17">
									<Path fill = {"white"}     d = "M13.0754 17H11.4552H4.54481H2.92456C1.30937 17 0 15.6916 0 14.0776V6.67026C0.00622037 6.03472 0.30506 5.43747 0.810127 5.05117L6.32709 0.582506C7.29786 -0.194169 8.67784 -0.194169 9.64861 0.582506L15.1899 5.04308C15.693 5.43095 15.9914 6.0272 16 6.66216V14.0776C16 15.6916 14.6906 17 13.0754 17Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Home_10

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(217, 217, 217)",
	},
_Rectangle_998: {
	width: 331,
	height: 100,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 22,
	top: 227,
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
_Rectangle_999: {
	width: 331,
	height: 98,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 22,
	top: 336,
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
_Rectangle_1000: {
	width: 331,
	height: 100,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 22,
	top: 443,
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
_Stationary_Bin: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 43,
	top: 254,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Shoes_Bin: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 43,
	top: 363,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_Shoes_Bin_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 43,
	top: 470,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
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
_Rectangle_993: {
	width: 331,
	height: 101,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 22,
	top: 117,
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
_Clothes_Bin: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 44,
	top: 144,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_fluent_delete_48_filled: {
	width: 22,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 306,
	top: 156,
	},
_Group: {
	width: 13.5205,
	height: 16.1562,
	position: "absolute",
	transform: [
		{translateX: 4.23962},
		{translateY: 3.09375},
	],
	},
style12: {
	position: "absolute",
	},
style13: {
	},
_fluent_delete_48_filled_2: {
	width: 22,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 306,
	top: 266,
	},
_Group_2: {
	width: 13.5205,
	height: 16.1562,
	position: "absolute",
	transform: [
		{translateX: 4.23962},
		{translateY: 3.09375},
	],
	},
style16: {
	position: "absolute",
	},
style17: {
	},
_fluent_delete_48_filled_3: {
	width: 22,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 306,
	top: 374,
	},
_Group_3: {
	width: 13.5205,
	height: 16.1562,
	position: "absolute",
	transform: [
		{translateX: 4.23962},
		{translateY: 3.09375},
	],
	},
style20: {
	position: "absolute",
	},
style21: {
	},
_fluent_delete_48_filled_4: {
	width: 22,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 304,
	top: 482,
	},
_Group_4: {
	width: 13.5205,
	height: 16.1562,
	position: "absolute",
	transform: [
		{translateX: 4.23962},
		{translateY: 3.09375},
	],
	},
style24: {
	position: "absolute",
	},
style25: {
	},
_12_items: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 44,
	top: 171,
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_12_items_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 44,
	top: 281,
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_07_items: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 43,
	top: 387,
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "400",
	fontFamily: "Poppins",
	textAlign: "left",
	},
_05_items: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 45,
	top: 497,
	color: "rgb(255, 255, 255)",
	fontSize: 13,
	fontWeight: "400",
	fontFamily: "Poppins",
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
style33: {
	height: 11.3333,
	position: "absolute",
	top: 0,
	},
style34: {
	},
style35: {
	height: 4,
	position: "absolute",
	top: 3.66666,
	transform: [
		{translateX: 22.5707},
	],
	},
style36: {
	},
style37: {
	height: 7.33334,
	position: "absolute",
	top: 2,
	transform: [
		{translateX: 1.96265},
	],
	},
style38: {
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
_My_Bins: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 153,
	top: 59,
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
_Group_5: {
	width: 16.8,
	height: 14.4,
	position: "absolute",
	transform: [
		{translateX: 3.59985},
		{translateY: 4.79999},
	],
	},
_Group_6: {
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
		{translateX: 0.00012207},
		{translateY: 12},
	],
	},
style52: {
	},
_Group_5266: {
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
style60: {
	position: "absolute",
	},
style61: {
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
style66: {
	position: "absolute",
	transform: [
		{translateX: 14},
	],
	},
style67: {
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
_Group_7: {
	width: 9.49219,
	height: 9.49219,
	position: "absolute",
	transform: [
		{translateX: 4},
	],
	},
_Group_8: {
	width: 9.49219,
	height: 9.49219,
	position: "absolute",
	},
style74: {
	position: "absolute",
	},
style75: {
	},
_Group_9: {
	width: 15.8203,
	height: 7.45312,
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 10.5469},
	],
	},
_Group_10: {
	width: 15.8203,
	height: 7.45312,
	position: "absolute",
	},
style78: {
	position: "absolute",
	},
style79: {
	},
_Group_5264: {
	width: 36,
	height: 49,
	position: "absolute",
	left: 42,
	top: 9,
	},
_Home: {
	width: 36,
	height: 18,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 31,
	},
_Home_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(241, 85, 40)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Poppins",
	textAlign: "center",
	},
_Rectangle_1048: {
	width: 30,
	height: 30,
	backgroundColor: "rgb(241, 85, 40)",
	position: "absolute",
	left: 3,
	top: 0,
	borderRadius: 6,
	},
_Frame_56: {
	width: 16,
	height: 17,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 10,
	top: 7,
	},
style85: {
	position: "absolute",
	},
style86: {
	},
})

