import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/routes/Navigation";
import { ListaProvider } from './src/context/ListaContext';

export default function App() {
    return (
        <ListaProvider>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Navigation />
            </View>
        </ListaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});
