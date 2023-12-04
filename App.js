import React from 'react';
import TelaPrincipal from './telas/telaPrincipal';
import TelaAdicionarDespesa from './telas/telaAdicionarDespesa';
import TelaHistorico from './telas/telaHistorico';
import TelaComprovante from './telas/telaComprovante';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ title: 'PoupCerto', headerShown: false }} component={MenuInferior} />
          <Stack.Screen name="Historico" options={{ title: 'Histórico' }} component={TelaHistorico} />
          <Stack.Screen name="Comprovante" options={{ title: 'Comprovante' }} component={TelaComprovante} />
        </Stack.Navigator>
    </NavigationContainer>
  );

    function MenuInferior() {
      return (
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{ title: 'PoupCerto', headerShown: false }} component={TelaPrincipal}/>
        <Tab.Screen name="Adicionar" options={{ title: 'Adicionar', headerShown: false }} component={TelaAdicionarDespesa}/>
        <Tab.Screen name="Historico" component={TelaHistorico}/>
      </Tab.Navigator>
      )
    };

}



/*

function MenuInferior
  Tab.Navigator
    Tab.Screen  TelaPrincipal
    Tab.Screen  Adicionar
    Tab.Screen  Historico

*/

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