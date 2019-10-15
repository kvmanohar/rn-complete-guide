import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
	return (
		<View style={styles.listItemText}>
			<Text>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listItemText: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#CCC',
		borderColor: 'black',
		borderWidth: 1
	}
});

export default GoalItem;
