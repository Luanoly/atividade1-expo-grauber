import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native';

const TelaInicial = () => {
    return (
        <View style={styles.container}>

            <View style={[styles.telaSuperior]}>
                <View>
                    <Text style={{ color: 'white', fontSize: 32, marginLeft: 24, marginTop: 40 }}>PoupCerto</Text>
                    <Text style={{ color: 'white', fontSize: 28, marginLeft: 24, marginTop: 10 }}>R$: 1.236,43</Text>
                </View>
            </View>

            <View style={styles.telaInicial}>
                <Text style={{ color: 'black', marginTop: 30, fontSize: 20, color: '#6AAAE6', }}>ULTIMOS REGISTROS DO MÊS</Text>
            </View>

            <View style={styles.telaUltimosHistoricos}>
                <View style={{ padding: 10, borderWidth: 1 }}>
                    <Text style={{ fontSize: 20 }}>Um hisotico por vez</Text>
                </View>
            </View>

            <View style={styles.menu}>

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
    telaInicial: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red',
    },
    telaUltimosHistoricos: {
        flex: 2,
        borderWidth: 12,
        borderColor: '#6AAAE6',
        borderRadius: 4,
    },
    menu: {
        flex: 0.4,
        borderTopWidth: 2,
        borderColor: 'white',
        backgroundColor: '#6AAAE6'
    },
});

export default TelaInicial;