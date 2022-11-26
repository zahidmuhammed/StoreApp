import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	ScrollView,
	StatusBar,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { HiOutlineHome } from 'react-icons/hi';
// import { HomeScreen } from './HomeScreen';

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
	return (
		<View style={styles.HomeStyleContainer}>
			<View style={styles.Header}>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingTop: 10,
					}}
				>
					<View style={{ marginLeft: 15, marginTop: 2 }}>
						<MaterialCommunityIcons
							name="menu"
							color="white"
							size={30}
						/>
					</View>
					<View>
						<Image
							source={require('../assets/LOGO.png')}
							style={styles.logoStyle}
						/>
					</View>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: 'white' }}>Main Store</Text>
					</View>
					<View style={{ marginRight: 15 }}>
						<MaterialCommunityIcons
							name="cart"
							color="white"
							size={30}
						/>
					</View>
				</View>
				<View style={{ paddingHorizontal: 20 }}>
					<TextInput
						placeholder="Search products"
						style={styles.SearchContainer}
					/>
				</View>
			</View>
			<ScrollView style={styles.ScrollViewContainer}>
				<View
					style={{
						backgroundColor: '#0076B9',
						height: 40,
					}}
				>
					<Text>Select a location to see product availability</Text>
				</View>
				<View
					style={{
						height: 150,
						backgroundColor: 'white',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text>Categories</Text>
				</View>
				<View
					style={{
						height: 250,
						backgroundColor: 'white',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text>Offer Section</Text>
				</View>
				<View
					style={{
						height: 250,
						backgroundColor: 'white',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text>Top Brands</Text>
				</View>
				<View
					style={{
						height: 250,
						backgroundColor: 'yellow',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text>Free Home Delivery</Text>
				</View>
				<View
					style={{
						height: 250,
						backgroundColor: 'green',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text>Daily Income for you</Text>
					<Text>weekly offers</Text>
					<Text>Monthly Gift</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export const DashboardPage = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="home"
							color="grey"
							size={30}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="My Orders"
				component={OrderScreen}
				options={{
					tabBarLabel: 'My Orders',
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="bell"
							color="grey"
							size={30}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Contact"
				component={ContactScreen}
				options={{
					tabBarLabel: 'Contact',
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="account"
							color="grey"
							size={30}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={CartScreen}
				options={{
					tabBarLabel: 'Cart',
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="cart"
							color="grey"
							size={30}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const OrderScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Order Screen</Text>
		</View>
	);
};

const ContactScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Contact Screen</Text>
		</View>
	);
};

const CartScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Cart Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	HomeStyleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	Header: {
		marginTop: StatusBar.currentHeight,
		height: 120,
		alignSelf: 'stretch',
		backgroundColor: '#0076B9',
		color: 'white',
	},
	ScrollViewContainer: {
		flex: 4,
		alignSelf: 'stretch',
		borderTopColor: 'white',
		borderWidth: 1,
		color: 'white',
	},
	SearchContainer: {
		marginVertical: 20,
		backgroundColor: 'white',
		height: 40,
		borderRadius: 10,
		paddingHorizontal: 10,
	},
});
