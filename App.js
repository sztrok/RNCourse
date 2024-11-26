import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.dummyText}>Another text!</Text>
            </View>
            <Text style={{
                margin: 10,
                borderWidth: 2,
                borderColor: 'gray',
                padding: 10
            }}> {/* dwa rodzaje ustawiania styli*/}
                Hello World!!!!!
            </Text>

            <Button title={"BUTTON"}/>
        </View>
    );
}

//
// const style2 = StyleSheet.create({
//     container: {
//         margin: 10,
//         borderWidth: 2,
//         borderColor:'blue',
//         padding:10,
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dummyText: {
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: 'blue',
    }
});
