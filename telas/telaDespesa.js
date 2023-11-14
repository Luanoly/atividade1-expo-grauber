import { Center, Select } from 'native-base';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button, SegmentedButtons, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const TelaDespesa = () => {
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

            <View style={styles.inserirDespesa}>
                <View style={{ padding: 4, marginLeft: 8 }}>
                    <Text style={{ fontSize: 24, color: 'white' }}>Inserir Despesa</Text>
                    <TextInput label="01/01/2023" />
                </View>
                <View style={{ padding: 4, marginLeft: 8 }}>
                    <Text style={{ fontSize: 24, color: 'white' }}>Categorías</Text>
                </View>
            </View>

            <View style={styles.descricao}>
                <TextInput label="Descrição..." />
            </View>

            <View style={styles.button}>
                <Button icon="horse" mode="elevated" width={200} buttonColor='#AA0014' textColor='#fff' onPress={() => console.log('Pressed')}>Adicionar</Button>
            </View >

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

        </View >
    );
}

const styles = StyleSheet.create({
    // View principal não mexer
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    telaSuperior: {
        flex: 1.1,
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
    inserirDespesa: {
        flex: 1.6,
        backgroundColor: '#003B45',
        borderRadius: 4,
        padding: 10,
        margin: 8,
    },
    descricao: {
        flex: 0.65,
        borderWidth: 4,
        borderColor: '#003B45',
        borderRadius: 4,
        padding: 4,
        margin: 12,
    },
    button: {
        flex: 0.35,
        alignItems: 'center',
    },
    menu: {
        flex: 0.32,
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
    fontePadrao: {
        fontSize: 20,
        color: '#fff'
    },
});

export default TelaDespesa;
