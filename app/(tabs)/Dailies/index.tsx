import { StyleSheet, ScrollView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Tasks from '@/components/Tasks';
import DailiesData from '@/components/dailiesData';
import { useFocusEffect } from 'expo-router';

interface Scheduling {
  repeats: string;
  repeatTime: number;
  weekDays: number[];
}

interface Reminders {
  hours: number;
  min: number;
}

interface Dailies {
  title: string;
  notes: string;
  difficulty: string;
  scheduling: Scheduling;
  reminders: Reminders[];
}

const Dailies = () => {
  const [dailies, setDailies] = useState<Dailies[]>([]);
//   const [silver, setSilver] = useState<number>(0);
    const getData = async () => {
      try {
        const response = await fetch('http://192.168.1.11:3000/dailies', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await response.json();      
        if (Array.isArray(json)) {
          setDailies(json);
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
      }, [])
    );

  
  return (
    <ScrollView style={styles.taskContainer}>
      {dailies.map(daily=> <DailiesData key={daily.title} taskTitle={daily.title} taskNote={daily.notes} path='dailies'/>)}
    </ScrollView>
  );
};

export default Dailies;

const styles = StyleSheet.create({
  taskContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#EBEAEC',
  },
});
