import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';


interface TaskData {
    title: string;
    notes: string;
    positive: boolean;
    negative: boolean;
    difficulty: string;
    reset_counter: string;
  }
  
  interface HeaderProps {
    taskData: TaskData;
    setTaskData: React.Dispatch<React.SetStateAction<TaskData>>;
  }

const Difficulty: React.FC<HeaderProps> = ( {taskData,setTaskData}) => {
    const difficulties = [
        { diff: 'Trivial', name: 'dice-one' },
        { diff: 'Easy', name: 'dice-two' },
        { diff: 'Medium', name: 'dice-three' },
        { diff: 'Hard', name: 'dice-four' },
    ];
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Difficulty</Text>
    <View style={styles.diffCont}>
        {difficulties.map((difficulty) => (
            <TouchableOpacity
                key={difficulty.diff}
                style={styles.starCont}
                onPress={() => setTaskData({ ...taskData, difficulty: difficulty.diff })}
            >
                <FontAwesome5
                    name={difficulty.name}
                    size={55}
                    color={taskData.difficulty === difficulty.diff ? '#ffffff' : '#303133'}
                />
                <Text style={styles.difftext}>{difficulty.diff}</Text>
            </TouchableOpacity>
        ))}
    </View>
</View>
  )
}

export default Difficulty

const styles = StyleSheet.create({
    container:{
        marginTop:25,
    },
    starCont: {
        alignItems: 'center',
    },
    diffCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    difftext: {
        fontFamily: 'monospace',
        fontWeight: '900',
        color: '#B0CEF3',
    },
    text: {
        color: '#B0CEF3',
        fontWeight: '500',
        fontSize: 17,
        marginBottom: 10,
    },
})