import React from 'react';
import TelaPrincipal from './telas/telaPrincipal';
import TelaDespesa from './telas/telaDespesa';
import TelaHistorico from './telas/telaHistorico';
import TelaComprovante from './telas/telaComprovante';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Screen name="Home" options={{ title: 'PoupCerto', headerShown: false }} component={TelaPrincipal} /> */}
          {/* <Stack.Screen name="Historico" options={{ title: 'Histórico' }} component={TelaHistorico} /> */}
          <Stack.Screen name="Comprovante" options={{ title: 'Comprovante' }} component={TelaComprovante} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// Icones
// https://oblador.github.io/react-native-vector-icons/

// Icones para o app
 
// academia = dumbbell
// presentes = gift 
// lanche = pizza
// viagem = road / earth
// cigarro = smoking
// uber = taxi
// cinema = ticket
// dentista = tooth
// internet = wifi
// notebook = laptop
//  