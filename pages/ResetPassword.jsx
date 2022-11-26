import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	Pressable,
} from 'react-native';
export const ResetPassword = () => {
	const [mobile, setMobile] = useState('');
	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/LOGO.png')}
				style={styles.logoStyle}
			/>
			<Text style={styles.buttonText}>Reset Password</Text>
			<View style={styles.loginContainer}>
				<TextInput
					style={styles.inputContainer}
					value={mobile}
					onChangeText={setMobile}
					placeholder="Mobile Number"
				/>
			</View>

			<Pressable style={styles.loginButton}>
				<Text style={styles.buttonText}>Send Request</Text>
			</Pressable>

			<Text style={styles.buttonText}>
				Create a new account ?{' '}
				<Text style={styles.greenText}>Signup now</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0076B9',
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginContainer: {
		backgroundColor: '#fff',
		padding: 5,
		marginVertical: 5,
		paddingHorizontal: 60,
	},
	inputContainer: {
		paddingVertical: 10,
	},
	logoStyle: {
		marginTop: 20,
		marginBottom: 20,
	},
	loginButton: {
		marginVertical: 20,
		backgroundColor: '#17bd70',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 50,
		width: 300,
		justifyContent: 'center',
	},
	buttonText: {
		color: '#fff',
	},
	greenText: {
		color: '#17bd70',
	},
	forgotText: {
		color: 'white',
		justifyContent: 'flex-end',
	},
});
