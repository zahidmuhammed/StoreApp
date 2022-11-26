import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Pressable,
} from 'react-native';

const LoginPage = ({ navigation: { navigate } }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [verified, setVerified] = useState(false);

	useEffect(() => {
		if (username === 'DC610281' && password === '123456') {
			setVerified(true);
		}
	}, [username, password]);

	const LoginHandle = () => {
		if (verified) {
			navigate('Dashboard');
		} else {
			setVerified(false);
		}
	};

	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/LOGO.png')}
				style={styles.logoStyle}
			/>
			<View style={styles.loginContainer}>
				<TextInput
					style={styles.inputContainer}
					value={username}
					onChangeText={setUsername}
					placeholder="Username / Mobile Number"
				/>
				<TextInput
					style={styles.inputContainer}
					value={password}
					onChangeText={setPassword}
					placeholder="password"
				/>
			</View>
			<Text style={styles.forgotText} onPress={() => navigate('Reset')}>
				Forgot Password?
			</Text>
			{/* <View style={styles.loginButton}> */}
			<Pressable style={styles.loginButton} onPress={() => LoginHandle()}>
				<Text style={styles.buttonText}>User Login</Text>
			</Pressable>

			<Text style={styles.buttonText}>
				Don't have an account?{' '}
				<Text style={styles.greenText}>Signup now</Text>
			</Text>

			{/* </View> */}
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
		padding: 20,
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

export default LoginPage;
