import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Button, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const TelaDespesa = () => {
    const [isLoading, setLoading] = useState(true);
    const [despesas, setDespesas] = useState([]); // Estado para armazenar o valor inserido

    const getDespesas = async () => {
        try {
            const response = await fetch('https://projeto-nestjs-financas.onrender.com/despesas');
            const json = await response.json();
            setDespesas(json);
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
            <StatusBar style="auto" />
            <View style={[styles.menuBar, { marginTop: 0 }]}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={{ color: 'white', fontSize: 24 }}>PoupCerto</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>

                <View>
                    <Text style={{ color: 'black', marginTop: 40, fontSize: 18, marginBottom: 20 }}>Categoria:</Text>

                </View>

                {/* Caixa de texto para inserir o valor */}
                <TextInput
                    placeholder="                      Insira o valor"
                    style={styles.input}
                    color={'#569b4a'}
                />

                <View style={styles.botaoConfirmar}>
                    <Button
                        title="Confirmar"
                        color={'#569b4a'}
                    />
                </View>

                <View style={{ flex: 1, padding: 24 }}>
                    {isLoading ? (<ActivityIndicator />) : (
                        <FlatList
                            data={despesas}
                            keyExtractor={({ id }) => id}
                            renderItem={({ item }) => (
                                <Text>
                                    {item.categoria}, {item.valor}
                                </Text>
                            )}
                        />
                    )}

                </View>
            </View>
        </View>
    );
};

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
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding: 10,
    },
    input: {
        width: '60%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default TelaDespesa;
