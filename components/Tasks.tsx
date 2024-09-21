import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ToggleButton } from 'react-native-paper/'

interface taskData {
    taskTitle: string;
    taskNote: string;
    positive: boolean;
    difficulty: string;
    Reset_Counter: string;
    negative: boolean;
    setSilver: (silver: number) => void;
    silver: number;
}


const Tasks: React.FC<taskData> = ({ taskTitle, taskNote, positive, negative, difficulty, Reset_Counter, silver, setSilver }) => {
    const [taskPos, setPos] = useState<number>(0)
    const [taskNeg, setNeg] = useState<number>(0)
    const [diff, setDiff] = useState(0);

    useEffect(() => {
        switch (difficulty) {
            case 'Trivial':
                setDiff(1);
                break;
            case 'Easy':
                setDiff(2);
                break;
            case 'Medium':
                setDiff(3);
                break;
            case 'Hard':
                setDiff(4);
                break;
            default:
                setDiff(0);
                break;
        }
    }, [difficulty]);

    const handlePositivePress = () => {
        setPos(taskPos + 1);
        // setSilver(silver+diff)
    };
    const handleNegativePress = () => {
        setNeg(taskNeg + 1);
        // if(silver != 0) setSilver(silver-diff); 
    };
    return (
        <View style={styles.task}>
            <ToggleButton icon='plus' iconColor='white' rippleColor='white' style={styles.button} onPress={handlePositivePress} disabled={!positive} />
            <View style={styles.taskData}>
                <View style={styles.taskText} >
                    <Text style={styles.taskTitle}>{taskTitle}</Text>
                    <Text style={styles.taskNote}>{taskNote}</Text>
                </View>
                <View style={styles.gbCont}>
                    <Text style={{ color: '#c1c1c3', display: taskPos === 0 ? 'none' : 'flex' }}>
                        +
                        {taskPos}
                    </Text>
                    <View style={styles.Vline}></View>
                    <Text style={{ color: '#c1c1c3', display: taskNeg === 0 ? 'none' : 'flex' }}>
                        -{taskNeg}
                    </Text>
                </View>
            </View>
            <ToggleButton icon='minus' iconColor='white' rippleColor='white' style={styles.button} onPress={handleNegativePress} disabled={!negative} />
        </View>
    )
}

export default Tasks;

const styles = StyleSheet.create({
    task: {
        height: 'auto',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#38383A',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 15,
        marginBottom: 10,
    },
    button: {
        width: '10%',
        height: '100%',
        backgroundColor: '#28a745',
    },
    taskData: {
        width: '80%',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    taskText: {},
    taskTitle: {
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        color: '#ffffff'
    },
    taskNote: {
        color: '#c1c1c3',
    },
    gbCont: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 5,
        alignItems: 'center',
    },
    Vline: {
        width: 1,
        height: 15,
        backgroundColor: '#c1c1c3',
    }
})