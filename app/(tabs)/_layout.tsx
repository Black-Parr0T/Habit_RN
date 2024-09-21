import Header from '@/components/Header';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, usePathname, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  const router = useRouter();
  const path = usePathname();
  
  const getType = () => {
    if (path.includes('Habit')) return 'habit';
    if (path.includes('Dailies')) return 'dailies';
    if (path.includes('ToDo')) return 'todo';
    if (path.includes('Rewards')) return 'rewards';
    return '';
  };
  
  return (
    <>
      <Header />
      <Ionicons
        name='add'
        size={30}
        color='#ffffff'
        style={styles.addbtn}
        onPress={() => router.push(`/Create?type=${getType()}`)}
      />
      <Tabs screenOptions={{ tabBarActiveTintColor: '#8E08B7', headerShown: false }}>
        <Tabs.Screen
          name="Habit/index"
          options={{
            title: 'Habit',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='sun-o' color={color} />,
          }}
        />
        <Tabs.Screen
          name="Dailies/index"
          options={{
            title: 'Dailies',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='calendar-check-o' color={color} />,
          }}
        />
        <Tabs.Screen
          name="ToDo/index"
          options={{
            title: 'To-Dos',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='check-circle-o' color={color} />,
          }}
        />
        <Tabs.Screen 
          name='Rewards/index' 
          options={{
            title: 'Rewards',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='suitcase' color={color} />
          }} 
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  addbtn: {
    position: 'absolute',
    zIndex: 1,
    bottom: 80,
    right: 25,
    backgroundColor: '#8E08B7',
    padding: 10,
    borderRadius: 10,
    elevation: 5, // Added for Android elevation
    shadowColor: '#000', // Added for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
});
