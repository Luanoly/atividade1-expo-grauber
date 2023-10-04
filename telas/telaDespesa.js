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
                <Text style={{ color: 'black', marginTop: 40, fontSize: 20 }}>Gerencie suas finanças com eficiência e acompanhe suas despesas diárias de forma inteligente.</Text>

                {/* Caixa de texto para inserir o valor */}
                <TextInput
                    placeholder="Insira o valor"
                    style={styles.input}
                    onChangeText={handleValorChange}
                    value={valor}
                />

                {/* Exibir o valor inserido */}
                <Text style={styles.valorExibido}>Valor inserido: {valor}</Text>

                {/* Botão para limpar o valor */}
                <Button
                    title="Limpar"
                    onPress={() => setValor('')}
                />
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
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    valorExibido: {
        fontSize: 18,
    },
});

export default TelaDespesa;
