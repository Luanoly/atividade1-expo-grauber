import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native';
import { Icon, Avatar } from 'react-native-paper';

const TelaInicial = () => {
    return (
        <View style={styles.container}>

            <View style={[styles.telaSuperior]}>
                <View>
                    <Text style={{ color: 'white', fontSize: 28, marginLeft: 24, marginTop: 40 }}>PoupCerto</Text>
                    <Text style={{ color: 'white', fontSize: 36, marginLeft: 24, marginTop: 10 }}>R$: 1.236,43 
                    <Avatar.Icon size={28} color='white' backgroundColor='#0A3318' icon="eye" />
                    </Text>
                </View>
            </View>

            <View style={styles.telaInicial}>
                <View style={styles.componenteInicial}>
                    <Text style={styles.fontePadrao}>Histórico</Text>
                    <Avatar.Icon size={120} backgroundColor='#134F29' icon="file-document-multiple-outline"/>
                </View>
                <View style={styles.componenteInicial}>
                    <Text style={styles.fontePadrao}>Cofre</Text>
                    <Avatar.Icon size={120} backgroundColor='#134F29' icon="piggy-bank-outline"/>
                </View>
            </View>

            <View style={styles.telaUltimoHistorico}>
                <View style={ styles.registroHistorico }>
                    <Avatar.Icon size={54} color='#134F29' backgroundColor='white' icon="ambulance" />
                    <Text style={styles.fontePadrao}>Farmácia</Text>
                    <Text style={styles.fontePadrao}>R$: 300,00</Text>
                </View>
                <View style={ styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#134F29' backgroundColor='white' icon="cart-arrow-down" />
                    <Text style={styles.fontePadrao}>Mercado</Text>
                    <Text style={styles.fontePadrao}>R$: 36,00</Text>
                </View>
                <View style={ styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#134F29' backgroundColor='white' icon="credit-card" />
                    <Text style={styles.fontePadrao}>Cartões</Text>
                    <Text style={styles.fontePadrao}>R$: 209,00</Text>
                </View>
                <View style={ styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#134F29' backgroundColor='white' icon="package" />
                    <Text style={styles.fontePadrao}>Outros</Text>
                    <Text style={styles.fontePadrao}>R$: 100,00</Text>
                </View>
            </View>

            <View style={styles.menu}>
                <Avatar.Icon size={52} color='white' backgroundColor='#082D15' icon="home" />
                <Avatar.Icon size={90} color='white' backgroundColor='#082D15' borderWidth={1} borderColor='grey' icon="cash-plus" />
                <Avatar.Icon size={52} color='white' backgroundColor='#082D15' icon="bug" />
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
        backgroundColor: '#0A3318',
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 4,
    },
    componenteInicial: {
        backgroundColor: '#134F29',
        width: '40%',
        alignItems: 'center',
        height: '90%',
        borderRadius: 4,
    },
    telaUltimoHistorico: {
        flex: 2,
        borderWidth: 12,
        borderColor: '#134F29',
        borderRadius: 4,
        padding: 10,
        margin: 8,
        justifyContent: 'space-around'
    },
    registroHistorico: {
        backgroundColor: '#134F29',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        height: 64,
        borderRadius: 8,
        justifyContent: 'space-around',
        
    },
    menu: {
        flex: 0.3,
        borderTopWidth: 2,
        borderColor: 'white',
        backgroundColor: '#082D15',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    /// Fonte padrão para texto
    fontePadrao: {
        fontSize: 20,
         color: 'white'
    },
});

export default TelaInicial;