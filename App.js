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
          <Stack.Screen name="Comprovante" options={{ title: 'Comprovante' }} component={TelaComprovante} />
        </Stack.Navigator>
    </NavigationContainer>
  );

    function MenuInferior() {
      return (
      <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: '#003B45', height: 60, paddingBottom: 8, borderTopColor: '#798899' },
        tabBarActiveTintColor: '#f9f9f9',
        tabBarInactiveTintColor: '#8b8b8b'
      }}>
        <Tab.Screen name="Home" component={TelaPrincipal} options={{ title: 'Principal', headerShown: false }}/>
        <Tab.Screen name="Adicionar" component={TelaAdicionarDespesa} options={{ title: 'Adicionar', headerShown: false }} />
        <Tab.Screen name="Historico" component={TelaHistorico} options={{ title: 'Pesquisar por data e categoria'}}/>
      </Tab.Navigator>
      )
    };

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