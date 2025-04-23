import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/routes/Navigation';
import { ListaProvider } from './src/context/ListaContext';

export default function App() {
  return (
    <ListaProvider>
      <Navigation />
    </ListaProvider>
  );
}
