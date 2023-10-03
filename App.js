import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[styles.menuBar, { marginTop: 0 }]}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white' }}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white' }}>Contato</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={{ color: 'white', marginTop: 40, fontSize: 20 }}>Gerencie suas finanças com eficiência e acompanhe suas despesas diárias de forma inteligente.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#87cefa',
    height: 50,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ccc',
  },
});
