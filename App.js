import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './pages/Login';
import { DashboardPage } from './pages/Dashborad';
import { ResetPassword } from './pages/ResetPassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Login" component={LoginPage} />
				<Stack.Screen name="Reset" component={ResetPassword} />
				<Stack.Screen name="Dashboard" component={DashboardPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0076B9',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
