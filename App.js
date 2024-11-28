import {useState} from "react";
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
      text: enteredGoalText,
      id: Math.random().toString()
    }]);
    // console.log('goalInputHandler');
  }

  return (<View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} placeholder="Course goal" placeholderTextColor="grey"
          onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (<View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>)
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
      </View>
    </View>);
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  }, inputContainer: {
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
  }, goalsContainer: {
    flex: 5,
  }, goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  }, goalText: {
    color: 'white',
  }
});
