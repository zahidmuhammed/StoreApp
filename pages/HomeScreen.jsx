import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TextInput,
} from 'react-native';

export default HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Hey</Text>
			{/* <View>
				<View></View>
				<View>
					<TextInput placeholder="Search products"></TextInput>
				</View>
			</View>
			<ScrollView>
				<Text>Scroll page</Text>
			</ScrollView> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});
