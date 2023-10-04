import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Button } from 'react-native';

const TelaDespesa = () => {
    const [valor, setValor] = useState(''); // Estado para armazenar o valor inserido

    // Função para atualizar o estado com o valor inserido
    const handleValorChange = (text) => {
        setValor(text);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={[styles.menuBar, { marginTop: 0 }]}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={{ color: 'white', fontSize: 24 }}>PoupCerto</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={{ color: 'black', marginTop: 40, fontSize: 18, marginBottom: 20 }}>Gerencie suas finanças com eficiência e acompanhe suas despesas diárias de forma inteligente.</Text>

                {/* Caixa de texto para inserir o valor */}
                <TextInput
                    placeholder="                      Insira o valor"
                    style={styles.input}
                    onChangeText={handleValorChange}
                    value={valor}
                    color={'#569b4a'}
                />

                {/* Exibir o valor inserido */}
                <Text style={styles.valorExibido}>Valor inserido: {valor}</Text>

                <Button
                    title="Confirmar"
                    color={'#569b4a'}
                />
                <Button
                    title="Limpar"
                    onPress={() => setValor('')}
                />

            </View>

            <View style={styles.historico1}>
                <Text>Historico 1</Text>
            </View>

            <View style={styles.historico2}>
                <Text>Historico 2</Text>
            </View>

            <View style={styles.historico3}>
                <Text>Historico 3</Text>
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
    valorExibido: {
        fontSize: 18,
    },
    historico1: {
        flex: 0.5,
        backgroundColor: '#f9a825',
    },
    historico2: {
        flex: 0.5,
        backgroundColor: '#a9a825'
    },
    historico3: {
        flex: 0.5,
        backgroundColor: '#ffffa5'
    }
});

export default TelaDespesa;
