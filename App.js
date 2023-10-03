import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[styles.menuBar, { marginTop: 0 }]}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white', fontSize: 18 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white', fontSize: 24 }}>PoupCerto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white', fontSize: 18 }}>Contato</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.texto}>
        <Text style={{ color: 'black', marginTop: 30, fontSize: 20, color: '#4682b4' }}>ULTIMOS REGISTROS DO MÊS</Text>
      </View>

      <View style={styles.botoes}>
        <Button title='mes'></Button>
        <Button title='ano' ></Button>
      </View>

      <View>
        <Calendar style={styles.Calendar} />
      </View>

      <View style={styles.anuncio}>
        <Text style={{ color: 'black', marginTop: 30, fontSize: 20, backgroundColor: 'yellow' }}>ANUNCIO</Text>
      </View>

      <Button title='Poupar' color={'green'} ></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4682b4',
    height: 70,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  botoes: {
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'white',
  },
  Calendar: {
    borderWidth: 1,
    borderColor: '#dda0dd'
  },
  anuncio: {
    flex: 2,
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////