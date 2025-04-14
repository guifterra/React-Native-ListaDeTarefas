import { NavigationContainer } from "@react-navigation/native"; // Basecontainer de botoes;
import { createStackNavigator } from "@react-navigation/stack"; // Navegacaoentre botoes;

import Home from "../components/Home/Home";
import Details from "../components/Details/Details";
import Form from "../components/Form/Form";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Form" component={Form} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}