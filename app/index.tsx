import { Redirect } from 'expo-router';

export default function Router() {
  const user = true;

  if (user) {
    return <Redirect href='/Habit' />
  } else {
    return <Redirect href='/SignUp' />
  }
}
