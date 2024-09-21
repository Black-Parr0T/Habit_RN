import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

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

const ResetCounter:React.FC<HeaderProps> = ({taskData,setTaskData}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Reset Counter</Text>
            <View style={styles.rsCont}>
                {['Daily', 'Weekly', 'Monthly'].map((period) => (
                    <TouchableOpacity key={period} onPress={() => setTaskData({ ...taskData, reset_counter: period })}>
                        <Text style={taskData.reset_counter === period ? styles.rscTextFocus : styles.rscText}>
                            {period}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default ResetCounter

const styles = StyleSheet.create({
    container:{
        marginTop:25,
    },
    text: {
        color: '#B0CEF3',
        fontWeight: '500',
        fontSize: 17,
        marginBottom: 10,
    },
    rsCont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    rscText: {
        backgroundColor: '#303133',
        paddingVertical: 15,
        fontFamily: 'monospace',
        fontWeight: '900',
        color: '#B0CEF3',
        paddingHorizontal: 18,
        borderRadius: 10,
    },
    rscTextFocus: {
        backgroundColor: '#B0CEF3',
        paddingVertical: 15,
        fontFamily: 'monospace',
        fontWeight: '900',
        color: '#303133',
        paddingHorizontal: 18,
        borderRadius: 10,
    },
})