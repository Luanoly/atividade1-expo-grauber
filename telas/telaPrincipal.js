import { FlatList, NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-paper';
import TelaHistorico from './telaHistorico';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/// Vai retornar as Depesa que vai estar na "flatlist"
const Despesa = ({ categoria, valor }) => {
    return (
        <Pressable onPress={detalhes}>
            <View style={styles.registroHistorico}>
                {/* <Avatar.Icon size={54} color='#004B57' backgroundColor='#A1DCE5' icon="cart-arrow-down" /> */}
                <Text style={styles.fonteHistorico}>{categoria}   R${valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}
                </Text>
            </View>
        </Pressable>
    )
}

function detalhes() {

}

const Tab = createBottomTabNavigator();

const TelaPrincipal = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [despesas, setDespesas] = useState([]);
    const [totalDespesas, setTotalDespesas] = useState(0);

    const calcularDespesas = () => {
        const soma = despesas.reduce((a, b) => a + Number(b.valor), 0);
        return soma;
    }

    const getDespesas = async () => {
        try {
            // const response = await fetch('https://projeto-nestjs-financas.onrender.com/despesas');
            const response = await fetch('http://10.220.30.122:3000/despesas');

            const json = await response.json();
            setDespesas(json);
            setTotalDespesas(json.reduce((a, b) => a + Number(b.valor), 0));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDespesas();
    }, []);

    return (
        <View style={styles.container}>

            <View style={[styles.telaSuperior]}>
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 24, marginTop: 40 }}>PoupCerto</Text>
                <View style={styles.telaDespesaValor}>
                    <Text style={{ color: '#fff', fontSize: 18, marginLeft: 24, marginTop: 4 }}>Despesas:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <NativeBaseProvider>
                            {isLoading ? (
                                <ActivityIndicator />
                            ) : (
                                <Text style={{ color: '#fff', fontSize: 32, marginLeft: 24, marginTop: 4 }}>
                                    {totalDespesas.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </Text>
                            )}
                        </NativeBaseProvider>
                    </View>
                </View>
            </View>

            <View style={styles.telaUltimoHistorico}>
                <NativeBaseProvider>
                    <View style={{ backgroundColor: '#fff', width: 300, height: 32, alignItems: 'center', marginLeft: 32, marginBottom: 10, }}>
                        <Text style={styles.fonteHistorico}>Últimos Registros</Text>
                    </View>
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            data={despesas}
                            renderItem={({ item }) => <Despesa categoria={item.categoria} valor={item.valor} />}
                        />)}
                </NativeBaseProvider>
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
        flex: 0.75,
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
        flex: 2,
        padding: 10,
        margin: 8,
        justifyContent: 'space-around',
        backgroundColor: '#fff'
    },
    registroHistorico: {
        backgroundColor: '#A1DCE5',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        height: 64,
        justifyContent: 'space-around',
        borderColor: '#798899',
        borderRadius: 8,
        marginTop: 10,
    },
    menu: {
        flex: 0.28,
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
        color: '#f5f5f5'
    },
    fonteHistorico: {
        fontSize: 20,
        color: '#003B45'
    },
});

export default TelaPrincipal;
