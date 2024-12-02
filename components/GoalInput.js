import {Button, TextInput, View, StyleSheet, Modal} from "react-native";
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
      <Modal visible={props.visible} animationType={"slide"} style={styles.modal}>
          <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Course goal"
                placeholderTextColor="grey"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
              />
              <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                      <Button title="Add Goal" onPress={addGoalHandler}/>
                  </View>
                  <View style={styles.button}>
                      <Button title="Cancel" onPress={props.onCancel}/>
                  </View>
              </View>
          </View>
      </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        height: 50,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center', //główna oś, w tym przypadku horyzontalna
        alignItems: 'center', //przeciwna oś, w tym przypadku wertykalna
        marginBottom: 24,
        padding:16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        paddingHorizontal: 8
    }
})