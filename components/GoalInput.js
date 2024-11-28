import {Button, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return (
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Course goal"
            placeholderTextColor="grey"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', //główna oś, w tym przypadku horyzontalna
        alignItems: 'center', //przeciwna oś, w tym przypadku wertykalna
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    }, textInput: {
        marginRight: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%'
    }
})