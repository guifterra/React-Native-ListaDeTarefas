import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/routes/Navigation"

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Navigation />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});
