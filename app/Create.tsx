import Checklist from '@/components/Checklist';
import Cost from '@/components/Cost';
import CreateHeader from '@/components/CreateHeader';
import Difficulty from '@/components/Difficulty';
import Reminders from '@/components/Reminders';
import Repeat from '@/components/Repeat';
import ResetCounter from '@/components/ResetCounter';
import Scheduling from '@/components/Scheduling';
import SchedulingTodo from '@/components/SchedulingToDo';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function CreateScreen() {

  const Create = async () => {
    console.log(rewardData);
    
    try {
      const response = await fetch(type === 'habit' ? 'http://192.168.1.11:3000/habit-create' : (type === 'dailies' ? 'http://192.168.1.11:3000/dailies-create' : (type === 'todo' ? 'http://192.168.1.11:3000/todos-create' : 'http://192.168.1.11:3000/rewards-create')), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(type=== 'rewards' ? rewardData : dataToSend),
      });
      if (response.status === 201) router.back()
    } catch (error) {
      console.log('error:', error);

    }
  }

  const [days, setDays] = useState([
    { key: 1, text: 'S', set: false, day: 'Sunday' },
    { key: 2, text: 'M', set: false, day: 'Monday' },
    { key: 3, text: 'T', set: false, day: 'Tuesday' },
    { key: 4, text: 'W', set: false, day: 'Wednesday' },
    { key: 5, text: 'T', set: false, day: 'Thursday' },
    { key: 6, text: 'F', set: false, day: 'Friday' },
    { key: 7, text: 'S', set: false, day: 'Saturday' },
  ]);

  const toggleDay = (index: number) => {
    setDays((prevDays) =>
      prevDays.map((day, i) =>
        i === index ? { ...day, set: !day.set } : day
      )
    );
  };

  const [todoDate, setTodoDate] = useState({ day: '', month: '', year: '' });
  const [Repeats, setRepeats] = useState<string>('Daily');
  const [repeatTime, setRepeatTime] = useState<number>(1);
  const { type } = useLocalSearchParams();

  const [checklist, setChecklist] = useState([{ value: '', checked: false }]);
  const [reminders, setReminders] = useState([{ hours: '', minutes: '' }]);

  const [taskData, setTaskData] = useState({
    title: '',
    notes: '',
    positive: false,
    negative: false,
    difficulty: '',
    reset_counter: '',
  });

  const dailiesData = {
    title: taskData.title,
    notes: taskData.notes,
    checklist,
    difficulty: taskData.difficulty,
    scheduling: Repeats === 'Weekly' ? { Repeats, repeatTime, days } : { Repeats, repeatTime },
    reminders: reminders,
  };


  const todoData = {
    title: taskData.title,
    notes: taskData.notes,
    checklist,
    difficulty: taskData.difficulty,
    Scheduling: todoDate,
    reminders: reminders,
  }

  const [coin, setCoin] = useState<number>(10);
  const rewardData = {
    title: taskData.title,
    notes: taskData.notes,
    coin
  }
  const dataToSend = {
    title: taskData.title,
    notes: taskData.notes,
    difficulty: taskData.difficulty,
    ...(type === 'habit'
      ? { positive: taskData.positive, negative: taskData.negative, reset_counter: taskData.reset_counter }
      : { checklist, scheduling: type === 'dailies' ? Repeats === 'Weekly' ? { Repeats, repeatTime, days } : { Repeats, repeatTime } : todoData.Scheduling, reminders }
    )
  };

  return (
    <ScrollView style={styles.container}>
      <CreateHeader taskData={taskData} setTaskData={setTaskData} sendData={Create} />

      {type === 'habit' && (
        <View style={styles.htypecont}>
          <TouchableOpacity onPress={() => setTaskData({ ...taskData, positive: !taskData.positive })}>
            <Ionicons name="add-circle" size={50} color={taskData.positive ? '#1DB954' : '#303133'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTaskData({ ...taskData, negative: !taskData.negative })}>
            <Ionicons name="remove-circle" size={50} color={taskData.negative ? '#FF4136' : '#303133'} />
          </TouchableOpacity>
        </View>
      )}

      {(type === 'dailies' || type === 'todo') && <Checklist checklist={checklist} setCheckList={setChecklist} />}

      {type !== 'rewards' && <Difficulty taskData={taskData} setTaskData={setTaskData} />}
      {type === 'rewards' && <Cost coin={coin} setCoin={setCoin} />}

      {type === 'habit' && <ResetCounter taskData={taskData} setTaskData={setTaskData} />}

      {type === 'dailies' && (
        <View>
          <Scheduling repeatTime={repeatTime} setRepeatTime={setRepeatTime} Repeats={Repeats} setRepeats={setRepeats} />
          <Repeat repeat={Repeats} days={days} toggleDay={toggleDay} />
          <Reminders reminders={reminders} setReminders={setReminders} />
        </View>
      )}

      {type === 'todo' && (
        <View>
          <SchedulingTodo reminders={todoDate} setReminders={setTodoDate} />
          <Reminders reminders={reminders} setReminders={setReminders} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  htypecont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});
