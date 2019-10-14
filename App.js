import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);
	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals((currentGoals) => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
	};
	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
				<Button title="ADD" onPress={addGoalHandler} />
			</View>
			<FlatList
				data={courseGoals}
				renderItem={(itemData) => (
					<View style={styles.listItemText}>
						<Text>{itemData.item.value}</Text>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	},

	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},

	input: {
		width: '80%',
		borderBottomColor: 'black',
		borderBottomWidth: 1
	},

	listItemText: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#CCC',
		borderColor: 'black',
		borderWidth: 1
	}
});
