import React, { useState, useEffect } from 'react';
import { BackHandler, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import TaskInput from '@/components/TaskInput';
import Scheduling from '@/components/Scheduling';
import Repeat from '@/components/Repeat';
import Reminders from '@/components/Reminders';

interface CreateProps {
    path: string;
    setMode: (editMode: boolean) => void;
    editMode: boolean;
}

const Create: React.FC<CreateProps> = ({ path, setMode, editMode }) => {
    const [taskData, setTaskData] = useState({
        title: '',
        notes: '',
        positive: false,
        negative: false,
        difficulty: '',
        reset_counter: ''
    });

    const difficulties = [
        { diff: 'Trivial', name: 'dice-one' },
        { diff: 'Easy', name: 'dice-two' },
        { diff: 'Medium', name: 'dice-three' },
        { diff: 'Hard', name: 'dice-four' },
    ];

    const [checklist, setChecklist] = useState([{ value: '' }]);

    const handleChInput = (value: string, index: number) => {
        const newCh = [...checklist];
        newCh[index].value = value;
        setChecklist(newCh);

        if (index === checklist.length - 1 && value !== '') {
            setChecklist([...checklist, { value: '' }]);
        }
    };

    const handleRemove = (index: number) => {
        if (index + 1 !== checklist.length) {
            const newCh = checklist.filter((_, i) => i !== index);
            setChecklist(newCh);
        }
    };

    const handleCreate = () => {
        console.log(taskData);
        setMode(!editMode);
    };

    useEffect(() => {
        const backAction = () => {
            setMode(!editMode);
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, [editMode]);

    return (
        <ScrollView >
            <View style={styles.createCont}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setMode(!editMode)}>
                    <Ionicons name="arrow-back" color="#B0CEF3" size={25} />
                </TouchableOpacity>
                <Text style={styles.text}>Create {path.slice(1)}</Text>
                <TouchableOpacity onPress={handleCreate}>
                    <Text style={styles.text}>CREATE</Text>
                </TouchableOpacity>
            </View>
            <TaskInput
                multiline={false}
                title="Task Title"
                setValue={(e) => setTaskData({ ...taskData, title: e })}
                value={taskData.title}
            />
            <TaskInput
                multiline
                title="Task Note"
                setValue={(e) => setTaskData({ ...taskData, notes: e })}
                value={taskData.notes}
            />
            {path.slice(1) === 'Habit' ? (
                <View style={styles.htypecont}>
                    <TouchableOpacity onPress={() => setTaskData({ ...taskData, positive: !taskData.positive })}>
                        <Ionicons name="add-circle" size={50} color={taskData.positive ? 'white' : '#303133'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTaskData({ ...taskData, negative: !taskData.negative })}>
                        <Ionicons name="remove-circle" size={50} color={taskData.negative ? 'white' : '#303133'} />
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <Text style={styles.difftext}>Checklist</Text>
                    <View style={styles.chlistCont}>
                        {checklist.map((chlist, index) => (
                            <View style={styles.chCont} key={index}>
                                <TouchableOpacity onPress={() => handleRemove(index)}>
                                    <Entypo name={index === checklist.length - 1 ? 'plus' : 'cross'} color="#B0CEF3" size={20} />
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.chInput}
                                    placeholder="Create New Checklist"
                                    value={chlist.value}
                                    onChangeText={(text) => handleChInput(text, index)}
                                    placeholderTextColor="#B0CEF3"
                                />
                            </View>
                        ))}
                    </View>
                </View>
            )}
            <View>
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
            {
                path.slice(1) === 'Dailies' ? <Scheduling /> : ''
            }
            {
                path.slice(1) === 'Habit' ?
                <View>
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
            </View> : 
            (
                <Repeat />
            )
            }
            {
                path.slice(1) === 'Dailies' ? <Reminders /> : ''
            }
            <Reminders />
            </View>
        </ScrollView>
    );
};

export default Create;

const styles = StyleSheet.create({
    createCont: {
        position: 'absolute',
        height: '100%',
        zIndex: 10,
        width: '100%',
        backgroundColor: '#000000',
        paddingVertical: 50,
        paddingHorizontal: 20,
        gap: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    htypecont: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
    chCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#063D82',
        borderRadius: 10,
    },
    chInput: {
        paddingVertical: 1,
        paddingHorizontal: 8,
        width: '90%',
        color: 'white',
    },
    chlistCont: {
        gap: 5,
    },
});
