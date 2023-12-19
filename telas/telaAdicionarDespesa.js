import { NativeBaseProvider } from 'native-base';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { ActivityIndicator, Avatar, Button, TextInput } from 'react-native-paper';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { Picker } from '@react-native-picker/picker';


const TelaDespesa = () => {

    const [isLoading, setLoading] = useState(true);
    const [despesas, setDespesas] = useState([]);
    const [totalDespesas, setTotalDespesas] = useState(0);
    const [visibleCalender, setVisibleCalender] = useState(false)
    const [valueDate, setValueDate] = useState()
    const [categoria, setCategoria] = useState()
    const [atualizarLista, setAtualizarLIsta] = useState(new Date())
    const [valor, setValor] = useState()
    console.log(atualizarLista);


    
    const despesaToSend = {
        data: valueDate,
        categoria: categoria,
        valor: valor,
        descricao: ""
    }

    const calcularDespesas = () => {
        const soma = despesas.reduce((a, b) => a + Number(b.valor), 0);
        return soma;
    }



    const getDespesas = async () => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_URL_DEV}/despesas`);
            const json = await response.json();
            setDespesas(json);
            setTotalDespesas(json.reduce((a, b) => a + Number(b.valor), 0));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const sendDespesa = async () => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_URL_DEV}/despesas`, {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(despesaToSend)
            });
            const json = await response.json();
            console.log(json);
            // setTotalDespesas(json.reduce((a, b) => a + Number(b.valor), 0));
            setAtualizarLIsta(new Date());
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDespesas();
    }, [atualizarLista]);

    const dayJS = dayjs()

    function Calendario() {
        if (!visibleCalender) {
            return (
                <Pressable onPress={() => setVisibleCalender(true)} style={{ backgroundColor: '#fff', padding: 10, borderRadius: 8, width: 280, alignItems: 'center' }}>
                    <Text>
                        Selecionar data
                    </Text>
                </Pressable>
            )
        }
        return (
            <Modal visible={visibleCalender} >
                <Pressable onPress={() => setVisibleCalender(false)} style={{ position: "absolute", right: 10, top: 10 }}>
                    <Avatar.Icon icon={"close"} style={{ backgroundColor: "white" }} />
                </Pressable>
                <View style={{ backgroundColor: "white", position: "relative", top: "25%" }}>
                    <View>
                        <DateTimePicker
                            value={dayJS}
                            onValueChange={(date) => {
                                // console.log('typeof = ' + typeof (date));
                                // console.log(date.substring(0, 10));
                                setValueDate(date.substring(0, 10));
                            }} />
                    </View>
                </View>
            </Modal>
        )
    }




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
                <View style={{ padding: 4, marginLeft: 8, alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, color: 'white', paddingBottom: 8 }}>Cadastrar despesa</Text>
                    <Calendario />
                </View>
                <View style={{ padding: 4, marginLeft: 8, alignItems: 'center', paddingTop: 8 }}>
                    <View style={{ backgroundColor: "white", borderRadius: 8 }}>

                        <Picker
                            style={{ width: 280, borderRadius: 8 }}
                            selectedValue={categoria}
                            onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
                        >
                            <Picker.Item label="Outros" value="Outros" />
                            <Picker.Item label="Cartões" value="Cartões" />
                            <Picker.Item label="Farmácia" value="Farmácia" />
                            <Picker.Item label="Transporte" value="Transporte" />
                            <Picker.Item label="Mercado" value="Mercado" />
                        </Picker>
                    </View>
                </View>
                <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 8 }}>
                    <Text style={{ fontSize: 24, color: 'white', marginLeft: 6, paddingRight: 8 }}>R$</Text>
                    <TextInput onChangeText={(valor) => setValor(valor)} width={280} placeholder='Inserir valor' style={{ width: 280, borderRadius: 8, backgroundColor: '#fff' }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 28, justifyContent: 'space-around' }}>
                    <Button mode="outlined" buttonColor='#004B57' onPress={() => console.log('Pressed')} textColor='#fff'>+1</Button>
                    <Button mode="outlined" buttonColor='#004B57' onPress={() => console.log('Pressed')} textColor='#fff'>+10</Button>
                    <Button mode="outlined" buttonColor='#004B57' onPress={() => console.log('Pressed')} textColor='#fff'>+50</Button>
                    <Button mode="outlined" buttonColor='#004B57' onPress={() => console.log('Pressed')} textColor='#fff'>+100</Button>
                </View>
            </View>

            <View style={styles.descricao}>
                <TextInput onChangeText={(text) => despesaToSend.descricao = text} label="Descrição..." style={{ height: 130, borderRadius: 8, backgroundColor: '#fff' }} />
            </View>

            <View style={styles.button}>
                <Button contentStyle={{ height: 54 }} mode="elevated" width={200} buttonColor='#003B45' textColor='#fff' onPress={() => sendDespesa()}>Adicionar</Button>
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
