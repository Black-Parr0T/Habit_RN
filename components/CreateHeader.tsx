import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TaskInput from './TaskInput'

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
  sendData:() => void;
}

const CreateHeader: React.FC<HeaderProps> = ({ taskData, setTaskData,sendData }) => {
    
  return (
    
    <View style={styles.createCont}>
      <View style={styles.header}>
        <TouchableOpacity onPress={sendData}>
          <Text style={styles.text}>CREATE</Text>
        </TouchableOpacity>
      </View>
      <TaskInput
        multiline={false}
        title="Task Title"
        setValue={(e) => setTaskData((prev) => ({ ...prev, title: e }))}
        value={taskData.title}
      />
      <TaskInput
        multiline
        title="Task Note"
        setValue={(e) => setTaskData((prev) => ({ ...prev, notes: e }))}
        value={taskData.notes}
      />
    </View>
  )
}

export default CreateHeader

const styles = StyleSheet.create({
  createCont: {
    backgroundColor: '#ffffff',
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }, text: {
    color: '#C3C3A1',
    fontWeight: '500',
    fontSize: 17,
  },
})
