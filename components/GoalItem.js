import {Text, View, StyleSheet, Pressable} from "react-native";

function GoalItem(props) {
    return (
      <View style={styles.goalItem}>
          <Pressable
            android_ripple={{color: 'red'}}
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
          >
              <Text style={styles.goalText}>{props.text}</Text>
          </Pressable>
      </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        borderRadius: 20,
        backgroundColor: '#5e0acc',
        borderColor: '#8b0acc',
        borderWidth: 3,
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})