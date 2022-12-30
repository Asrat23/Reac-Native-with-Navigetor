// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import Home from './screens/employee'
import About from './screens/student'
import ContactUs from './screens/teacher'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Employee" component={Home} />
        <Stack.Screen name="student" component={About} />
        <Stack.Screen name="teachers" component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#3973ac',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    paddingBottom : '0px',
    paddingTop:'20px'
  },
});
