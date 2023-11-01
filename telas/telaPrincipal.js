import { FlatList, NativeBaseProvider } from 'native-base';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native';
import { Icon, Avatar } from 'react-native-paper';

/// Vai retornar as Depesa que vai estar na "flatlist"
const Despesa = ({ categoria, valor }) => {
    return (
        <Text style={styles.item}>{categoria} - {valor}</Text>
    )
}

const TelaInicial = () => {
    return (
        <View style={styles.container}>

            <View style={[styles.telaSuperior]}>
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 24, marginTop: 40 }}>PoupCerto</Text>
                <View style={styles.telaDespesaValor}>
                    <Text style={{ color: '#fff', fontSize: 18, marginLeft: 24, marginTop: 4 }}>Despesa:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 32, marginLeft: 24, marginTop: 4 }}>R$: 645,00</Text>
                        <Avatar.Icon size={28} color='#fff' backgroundColor='#003B45' icon="eye" />
                    </View>
                </View>
            </View>

            <View style={styles.telaInicial}>
                <View style={styles.componenteInicial}>
                    <Text style={styles.fontePadrao}>Histórico</Text>
                    <Avatar.Icon size={66} backgroundColor='#004B57' icon="file-document-multiple-outline" />
                </View>
                <View style={styles.componenteInicial}>
                    <Text style={styles.fontePadrao}>Cofre</Text>
                    <Avatar.Icon size={66} backgroundColor='#004B57' icon="piggy-bank-outline" />
                </View>
            </View>

            <View style={styles.telaUltimoHistorico}>
                <NativeBaseProvider>
                    <FlatList
                        data={[
                            { categoria: 'Devin' },
                            { categoria: 'Dan' },
                            { categoria: 'Dominic' },
                            { categoria: 'Jackson' },
                            { categoria: 'James' },
                            { categoria: 'Joel' },
                            { categoria: 'John' },
                            { categoria: 'Jillian' },
                            { categoria: 'Jimmy' },
                            { categoria: 'Julie' },
                        ]}
                        renderItem={({ item }) => <Despesa categoria={item.categoria} />}
                    />
                </NativeBaseProvider>
            </View>

            {/* <View style={styles.telaUltimoHistorico}>
                <View style={styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#004B57' backgroundColor='#fff' icon="ambulance" />
                    <Text style={styles.fontePadrao}>Farmácia</Text>
                    <Text style={styles.fontePadrao}>R$: 300,00</Text>
                </View>
                <View style={styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#004B57' backgroundColor='#fff' icon="cart-arrow-down" />
                    <Text style={styles.fontePadrao}>Mercado</Text>
                    <Text style={styles.fontePadrao}>R$: 36,00</Text>
                </View>
                <View style={styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#004B57' backgroundColor='#fff' icon="credit-card" />
                    <Text style={styles.fontePadrao}>Cartões</Text>
                    <Text style={styles.fontePadrao}>R$: 209,00</Text>
                </View>
                <View style={styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#004B57' backgroundColor='#fff' icon="package" />
                    <Text style={styles.fontePadrao}>Outros</Text>
                    <Text style={styles.fontePadrao}>R$: 100,00</Text>
                </View>
                <View style={styles.registroHistorico}>
                    <Avatar.Icon size={54} color='#004B57' backgroundColor='#fff' icon="bus" />
                    <Text style={styles.fontePadrao}>Transporte</Text>
                    <Text style={styles.fontePadrao}>R$: 0,00</Text>
                </View>
            </View> */}

            <View style={styles.menu}>
                <View style={styles.iconesMenu}>
                    <Avatar.Icon size={32} color='#798899' backgroundColor='#fff' icon="home" />
                    <Text style={{ color: '#798899' }}>Início</Text>
                </View>
                <Avatar.Icon size={80} color='#AA0014' backgroundColor='#fff' borderWidth={1} borderColor='#AA0014' icon="cash-plus" />
                <View style={styles.iconesMenu}>
                    <Avatar.Icon size={32} color='#798899' backgroundColor='#fff' icon="bug" />
                    <Text style={{ color: '#798899' }}>Sobre</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    // View principal não mexer
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    telaSuperior: {
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#004B57',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderColor: '#798899',
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
    },
    telaDespesaValor: {
        backgroundColor: '#003B45',
        borderBottomWidth: 0.9,
        borderColor: '#798899',
        borderTopEndRadius: 44,
        borderBottomEndRadius: 44,
        height: 90,
        width: 370,
        marginLeft: 8,
        marginBottom: 10,
        alignItems: 'flex-start'
    },
    telaInicial: {
        flex: 0.6,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 8,
        backgroundColor: '#003B45',
        borderRadius: 4,
    },
    componenteInicial: {
        backgroundColor: '#004B57',
        width: '40%',
        alignItems: 'center',
        height: '70%',
        borderRadius: 4,
        borderColor: '#798899',
        borderTopWidth: 0.4,
        borderLeftWidth: 0.8,
    },
    telaUltimoHistorico: {
        flex: 1.6,
        borderWidth: 12,
        borderColor: '#004B57',
        borderRadius: 4,
        padding: 10,
        margin: 8,
        justifyContent: 'space-around',
        backgroundColor: '#003B45'
    },
    registroHistorico: {
        backgroundColor: '#004B57',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        height: 64,
        justifyContent: 'space-around',
        borderTopEndRadius: 32,
        borderBottomWidth: 0.4,
        borderLeftWidth: 0.8,
        borderColor: '#798899'
    },
    menu: {
        flex: 0.26,
        borderTopWidth: 0.5,
        borderColor: '#798899',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    iconesMenu: {
        alignItems: 'center',
        height: 60
    },
    /// Fonte padrão para texto
    fontePadrao: {
        fontSize: 20,
        color: '#fff'
    },
});

export default TelaInicial;