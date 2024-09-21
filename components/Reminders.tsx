import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Reminder {
    hours: string;
    minutes: string;
}

interface ReminderProps {
    reminders: Reminder[];
    setReminders: React.Dispatch<React.SetStateAction<Reminder[]>>;
}

const Reminder: React.FC<ReminderProps> = ({ reminders, setReminders }) => {

    const handleInputChange = (index: number, field: 'hours' | 'minutes', value: string) => {
        const newReminders = [...reminders];
        newReminders[index][field] = value;

        setReminders(newReminders);
        if (value.length > 0 && index === reminders.length - 1) {
            setReminders([...reminders, { hours: '', minutes: '' }]);
        }
    };

    const toggleReminder = (index: number) => {
        if (reminders[index].hours || reminders[index].minutes) {
            setReminders(reminders.filter((_, i) => i !== index));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Reminders</Text>
            {reminders.map((reminder, index) => (
                <View key={index} style={styles.reminderContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="00"
                        keyboardType="numeric"
                        value={reminder.hours}
                        onChangeText={(text) => handleInputChange(index, 'hours', text)}
                        maxLength={2}
                    />
                    <Text style={{fontSize:25}}>:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="00"
                        keyboardType="numeric"
                        value={reminder.minutes}
                        onChangeText={(text) => handleInputChange(index, 'minutes', text)}
                        maxLength={2}
                    />
                    <TouchableOpacity style={styles.btn} onPress={() => toggleReminder(index)}>
                        <Entypo name={reminder.hours || reminder.minutes ? 'cross' : 'plus'} size={22} />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    text: {
        color: '#B0CEF3',
        fontWeight: '500',
        fontSize: 17,
        marginBottom: 10,
    },
    reminderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        width: 50,
        marginHorizontal: 10,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: '#F3F2EA',
        borderRadius: 50,
        padding: 5,
    }
});

export default Reminder;
