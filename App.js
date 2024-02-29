import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;







