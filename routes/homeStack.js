import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import About from '../screens/About'
import ContactUs from '../screens/ContactUs'


const Stack = createNativeStackNavigator()

const AppNavigator=()=>{
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }}/>
            <Stack.Screen name="About" component={About}></Stack.Screen>
            <Stack.Screen name="Home" component={ContactUs}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}

export default homeStack