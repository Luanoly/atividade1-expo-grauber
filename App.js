import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[styles.menuBar, { marginTop: 0 }]}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white', fontSize: 20 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white', fontSize: 20 }}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={{ color: 'white', fontSize: 20 }}>Contato</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={{ color: 'black', marginTop: 40, fontSize: 20 }}>Gerencie suas finanças com eficiência e acompanhe suas despesas diárias de forma inteligente.</Text>
      </View>
      <Image
        source={{ uri: 'https://super.abril.com.br/wp-content/uploads/2017/02/porco-cofre.png?w=1024&h=682&crop=1' }}
        style={styles.backgroundImage}
      />
      <Button title='Poupar' color={'green'}></Button>
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
    height: 70,
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
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
