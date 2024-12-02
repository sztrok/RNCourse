import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
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
              <Image style={styles.image} source={require('../assets/images/react.jpg')}/>
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
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        color: 'white',
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        paddingHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})