import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import ShowCheckList from './showCheckList';



interface checkCounter {
    total: number;
    checked: number;
}
interface Reminders {
    hours: number;
    min: number;
}
interface taskData {
    taskTitle: string;
    taskNote: string;
    path:string;
    // difficulty: string;
    // Reset_Counter: string;
    // // setSilver:(silver: number) => void;
    // // silver:number;
    // checkCounter: checkCounter;
    // reminders: Reminders[];
}

const DailiesData:React.FC<taskData> = ({taskTitle,taskNote,path}) => {    
    const Checklist = true;
    const [showChList, setShowChList] = useState(false)
    const sch = path === 'todo' ? '12 November 2024': 1
    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskContainerNoCh}>
                <View style={{ width: '10%', }} >
                    <Ionicons name="checkbox" size={30} color="black" style={styles.checkBtn} />
                </View>
                <View style={styles.disTask}>
                    <Text style={styles.taskTitle}>
                        {taskTitle}
                    </Text>
                    <Text style={styles.taskNote}>
                        {taskNote}
                    </Text>
                    {/* +++++++++++++++++++ */}
                    <View style={path === 'todo' ? styles.remContain : styles.remContainer}>
                        <View style={styles.rm}>
                            <Ionicons name={path === 'todo' ? 'calendar' : "play-forward"} size={14} color="black" />
                            <Text>{sch}</Text>
                        </View>
                        <View style={styles.rm}>
                            <Ionicons name="alarm-outline" size={14} color="black" />
                            <Text>12:30</Text>
                        </View>
                    </View>
                    {/* +++++++++++++++++++ */}
                </View>
                {
                    Checklist ? <TouchableOpacity style={styles.checkCont} onPress={()=>setShowChList(prev=>!prev)}>
                    <Text>0</Text>
                    <View style={styles.hbar}></View>
                    <Text>3</Text>
                </TouchableOpacity> : null
                }
            </View>
            {
                (showChList && Checklist) ? <ShowCheckList /> : null
            }
        </View>
    )
}

export default DailiesData

const styles = StyleSheet.create({
    taskContainer: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#F3F0E6',
        overflow: 'hidden',
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 1
    },
    taskContainerNoCh: {
        height: 'auto',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal:5
    },
    checkBtn: {
        textAlign:'center'
    },
    disTask: {
        width: '80%',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    checkCont: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B2B0A9',
        borderRadius: 10,
        paddingVertical: 3
    },
    remContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-end'
    },
    remContain: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between'
    },
    rm: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    hbar: {
        height: 2,
        width: '70%',
        backgroundColor: 'white'
    },
    taskTitle: {
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        color: '#2A2928'
    },
    taskNote: {
        color: '#605F5D',
    },

})