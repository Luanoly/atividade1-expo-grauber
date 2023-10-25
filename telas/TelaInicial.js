import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native';

const TelaInicial = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.telaSuperior, { marginTop: 0 }]}>
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 28, marginLeft: 24, marginBottom: 40 }}>PoupCerto</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.textoMeio}>
                <Text style={{ color: 'black', marginTop: 30, fontSize: 20, color: '#6AAAE6', }}>ULTIMOS REGISTROS DO MÊS</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    // View principal não mexer
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    telaSuperior: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6AAAE6',
        height: 70,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderColor: 'white',
        borderBottomWidth: 2,
        borderStyle: 'solid'
    },
    textoMeio: {
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
});

export default TelaInicial;