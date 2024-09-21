import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

interface DayProps {
    key: number;
    text: string;
    set: boolean;
    day: string;
}

interface RepeatProps {
    repeat: string;
    days: DayProps[];
    toggleDay: (index: number) => void;
}

const Repeat: React.FC<RepeatProps> = ({ repeat, days, toggleDay }) => {
    return (
        <View style={styles.cont}>
            {repeat === 'Weekly' ? (
                <View style={styles.container}>
                    {days.map((day, index) => (
                        <TouchableOpacity
                            key={day.key}
                            onPress={() => toggleDay(index)}
                        >
                            <Text style={day.set ? styles.select : styles.unselect}>{day.text}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ) : null}
            <Text style={styles.subtext}>
                Repeats {repeat} every {repeat === 'Daily' || repeat === 'Weekly' ? 'Day ' : (repeat === 'Monthly' ? 'Month' : 'Year')}
                {repeat === 'Weekly' ? (
                    <Text style={styles.subtext}>
                        on {days.map(day => day.set ? <Text style={styles.subtext} key={day.key}>{day.day} </Text> : null)}
                    </Text>
                ) : null}
            </Text>
        </View>
    );
};

export default Repeat;

const styles = StyleSheet.create({
    cont: {
        marginTop: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    select: {
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        height: 35,
        width: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 50,
    },
    unselect: {
        backgroundColor: 'black',
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        height: 35,
        width: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 50,
    },
    subtext: {
        color: '#B0CEF3'
    }
});
