import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

type ReminderType = {
  day: string;
  month: string;
  year: string;
};

interface SchedulingProps {
  reminders: ReminderType;
  setReminders: (reminders: ReminderType) => void;
}

const Reminder: React.FC<SchedulingProps> = ({ reminders, setReminders }) => {

  const validateAndSetReminder = (field: keyof ReminderType, value: string) => {
    let validatedValue = value;

    switch (field) {
      case 'day':
        validatedValue = Math.max(1, Math.min(31, parseInt(value) || 0)).toString().padStart(2, '0');
        break;
      case 'month':
        validatedValue = Math.max(1, Math.min(12, parseInt(value) || 0)).toString().padStart(2, '0');
        break;
      case 'year':
        validatedValue = Math.max(1900, parseInt(value) || 1900).toString();
        break;
      default:
        break;
    }

    setReminders({ ...reminders, [field]: validatedValue });
  };

  const handleInputChange = (field: keyof ReminderType, value: string) => {
    setReminders({ ...reminders, [field]: value });
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.text}>Scheduling</Text>
      <View style={styles.reminderContainer}>
        <TextInput
          style={styles.input}
          placeholder="DD"
          keyboardType="numeric"
          value={reminders.day}
          onChangeText={(text) => handleInputChange('day', text)}
          onBlur={() => validateAndSetReminder('day', reminders.day)}
          maxLength={2}
        />
        <TextInput
          style={styles.input}
          placeholder="MM"
          keyboardType="numeric"
          value={reminders.month}
          onChangeText={(text) => handleInputChange('month', text)}
          onBlur={() => validateAndSetReminder('month', reminders.month)}
          maxLength={2}
        />
        <TextInput
          style={styles.input}
          placeholder="YYYY"
          keyboardType="numeric"
          value={reminders.year}
          onChangeText={(text) => handleInputChange('year', text)}
          onBlur={() => validateAndSetReminder('year', reminders.year)}
          maxLength={4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reminderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: 50,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  text: {
    color: '#B0CEF3',
    fontWeight: '500',
    fontSize: 17,
    marginBottom: 10,
  },
});

export default Reminder;
