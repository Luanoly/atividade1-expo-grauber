import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[styles.menuBar, { marginTop: 0 }]}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white', fontSize: 24 }}>PoupCerto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.texto}>
        <Text style={{ color: 'black', marginTop: 30, fontSize: 20, color: '#4682b4' }}>ULTIMOS REGISTROS DO MÊS</Text>
      </View>

      <View>
        <Calendar style={styles.Calendar} />
      </View>

      <View style={styles.registros}>
        <Text style={{ color: 'black', marginTop: 30, fontSize: 20 }}>Registro 1</Text>
      </View>
      <View style={styles.registros2}>
        <Text style={{ color: 'black', marginTop: 30, fontSize: 20 }}>Registro 2</Text>
      </View>
      <View style={styles.registros3}>
        <Text style={{ color: 'black', marginTop: 30, fontSize: 20 }}>Registro 3</Text>
      </View>

      <View style={styles.poupar}>
        <Button title='Poupar' color={'green'} ></Button>
      </View>

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
  texto: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  Calendar: {
    borderWidth: 1,
    borderColor: '#4682b4'
  },
  registros: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: '#ffff00'
  },
  registros2: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  registros3: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  poupar: {
    flex: 0.3,
    margin: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'green',
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////