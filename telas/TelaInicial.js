import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native';
import { Icon, Avatar } from 'react-native-paper';

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
                <Text style={{ color: 'black', marginTop: 30, fontSize: 20, color: '#6AAAE6', }}>ALGUMA OUTRA COISA</Text>
            </View>

            <View style={styles.telaUltimoHistorico}>
                <View style={ styles.registroHistorico }>
                    <Avatar.Icon size={54} color='#6AAAE6' backgroundColor='white' icon="flask" />
                    <Text style={{ fontSize: 20, color: 'white' }}>Farmácia</Text>
                    <Text style={{ fontSize: 20, color: 'white' }}>R$: 300</Text>
                </View>
                <View style={ styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#6AAAE6' backgroundColor='white' icon="tag" />
                    <Text style={{ fontSize: 20, color: 'white' }}>Mercado</Text>
                    <Text style={{ fontSize: 20, color: 'white' }}>R$: 36,00</Text>
                </View>
                <View style={ styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#6AAAE6' backgroundColor='white' icon="credit-card" />
                    <Text style={{ fontSize: 20, color: 'white' }}>Cartões</Text>
                    <Text style={{ fontSize: 20, color: 'white' }}>R$: 209,00</Text>
                </View>
                <View style={ styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#6AAAE6' backgroundColor='white' icon="package" />
                    <Text style={{ fontSize: 20, color: 'white' }}>Outros</Text>
                    <Text style={{ fontSize: 20, color: 'white' }}>R$: 100,00</Text>
                </View>
            </View>

            <View style={styles.menu}>
                <Avatar.Icon size={54} color='#6AAAE6' backgroundColor='white' icon="package" />
                <Avatar.Icon size={54} color='#6AAAE6' backgroundColor='white' icon="package" />
                <Avatar.Icon size={54} color='#6AAAE6' backgroundColor='white' icon="package" />
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
        borderColor: 'grey',
    },
    telaUltimoHistorico: {
        flex: 2,
        borderWidth: 12,
        borderColor: '#6AAAE6',
        borderRadius: 4,
        padding: 10,
        margin: 8,
        justifyContent: 'space-around'
    },
    registroHistorico: {
        backgroundColor: '#6AAAE6',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        height: 64,
        borderRadius: 8,
        justifyContent: 'space-around',
        
    },
    menu: {
        flex: 0.4,
        borderTopWidth: 2,
        borderColor: 'white',
        backgroundColor: '#6AAAE6',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
});

export default TelaInicial;