import { NativeBaseProvider } from 'native-base';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator, Avatar, Button, TextInput } from 'react-native-paper';



const TelaDespesa = () => {

    const [isLoading, setLoading] = useState(true);
    const [despesas, setDespesas] = useState([]);
    const [totalDespesas, setTotalDespesas] = useState(0);

    const calcularDespesas = () => {
        const soma = despesas.reduce((a, b) => a + Number(b.valor), 0);
        return soma;
    }

    const getDespesas = async () => {
        try {
            const response = await fetch('https://projeto-nestjs-financas.onrender.com/despesas');
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
            </View>

            <View style={styles.inserirDespesa}>
                <View style={{ padding: 4, marginLeft: 8 }}>
                    <Text style={{ fontSize: 24, color: 'white' }}>Inserir Despesa</Text>
                    <TextInput label="01/02/2023" />
                </View>
                <View style={{ padding: 4, marginLeft: 8, }}>
                    <TextInput label="Categorias \/" />
                </View>
                <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 24, color: 'white' }}>R$</Text>
                    <TextInput width={280} label="100,00" />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 14, justifyContent: 'space-between' }}>
                    <Button mode="outlined" buttonColor='#004B57' onPress={() => console.log('Pressed')} textColor='#fff'>+1</Button>
                    <Button mode="outlined" buttonColor='#004B57' onPress={() => console.log('Pressed')} textColor='#fff'>+2</Button>
                    <Button mode="outlined" buttonColor='#004B57' onPress={() => console.log('Pressed')} textColor='#fff'>+5</Button>
                    <Button mode="outlined" buttonColor='#004B57' onPress={() => console.log('Pressed')} textColor='#fff'>+10</Button>
                    <Button mode="outlined" buttonColor='#004B57' onPress={() => console.log('Pressed')} textColor='#fff'>+50</Button>
                </View>
            </View>

            <View style={styles.descricao}>
                <TextInput label="Descrição..." />
            </View>

            <View style={styles.button}>
                <Button contentStyle={{ height: 54 }} mode="elevated" width={200} buttonColor='#003B45' textColor='#fff' onPress={() => console.log('Pressed')}>Adicionar</Button>
            </View >

        </View >
    );
}

const styles = StyleSheet.create({
    // View principal não mexer
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    telaSuperior: {
        flex: 1.05,
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
