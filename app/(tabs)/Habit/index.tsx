import { StyleSheet, ScrollView } from 'react-native';
import React, { useState, useCallback } from 'react';
import Tasks from '@/components/Tasks';
import { useFocusEffect } from '@react-navigation/native';

interface Habit {
  title: string;
  notes: string;
  positive: boolean;
  negative: boolean;
  difficulty: string;
  reset_counter: string;
}

const Habit = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const getData = async () => {
    try {
      const response = await fetch('http://192.168.1.11:3000/habit', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();      
      if (Array.isArray(json)) {
        setHabits(json);
      } else {
        console.error('Fetched data is not an array');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
      console.log(habits);
      
    }, [])
  );

  const [silver, setSilver] = useState<number>(0);

  return (
    <ScrollView style={styles.taskContainer}>
      {habits.map((habit) => (
        <Tasks 
          key={habit.title} 
          taskTitle={habit.title} 
          taskNote={habit.notes} 
          positive={habit.positive} 
          negative={habit.negative}
          difficulty={habit.difficulty} 
          Reset_Counter={habit.reset_counter} 
          setSilver={setSilver} 
          silver={silver} 
        />
      ))}
    </ScrollView>
  );
};

export default Habit;

const styles = StyleSheet.create({
  taskContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#EBEAEC',
  },
});
