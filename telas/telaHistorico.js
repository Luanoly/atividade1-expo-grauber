import { FlatList, NativeBaseProvider } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button, TextInput } from 'react-native-paper';

/// Vai retornar as Depesa que vai estar na "flatlist"
const Despesa = ({ categoria, valor }) => {
    return (
        <View>
            <View style={styles.registroHistorico}>
                <Avatar.Icon size={54} color='#004B57' backgroundColor='#A1DCE5' icon="cart-arrow-down" />
                <Text style={styles.fonteHistorico}>{categoria}   R$ {valor}</Text>
            </View>
        </View>
    )
}

const TelaHistorico = () => {
    return (
        <View style={styles.container}>


            <View style={styles.filtro}>
                <View style={styles.periodoHistorico}>
                    <Text style={styles.fontePadrao}>Período inicial</Text>
                    <Text style={styles.fontePadrao}>Período Final</Text>
                </View>
                <View style={styles.periodoHistorico}>
                    <TextInput label={"01/11/2023"} />
                    <TextInput label={"20/11/2023"} />
                </View>
                <View style={styles.periodoHistorico}>
                    <Button contentStyle={{ height: 40 }} mode="elevated" width={154} buttonColor='#AA3514' textColor='#fff' onPress={() => console.log('Pressed')}>Últimos 30 dias</Button>
                    <Button contentStyle={{ height: 40 }} mode="elevated" width={154} buttonColor='#AA3514' textColor='#fff' onPress={() => console.log('Pressed')}>Últimos 90 dias</Button>
                </View>
                <View style={styles.periodoCategoria}>
                    <Text style={styles.fontePadrao}>Filtrar por categoría</Text>
                    <View style={{ flexDirection: 'row', padding: 8, width: 372, justifyContent: 'space-around', height: 56 }}>
                        <TextInput label={"Categoría"} />
                        <Button contentStyle={{ height: 40 }} mode="outlined" width={154} buttonColor='#004B57' textColor='#fff' onPress={() => console.log('Pressed')} >Filtrar</Button>
                    </View>
                </View>
            </View>

            <View style={styles.telaUltimoHistorico}>
                <NativeBaseProvider>
                    <View style={{ backgroundColor: '#fff', width: 300, height: 32, alignItems: 'center', marginLeft: 18, marginBottom: 10, }}>
                        <Text style={styles.fonteHistorico}>Histórico</Text>
                    </View>
                    <FlatList
                        data={[
                            { categoria: 'Farmácia', valor: '300,00' },
                            { categoria: 'Mercado', valor: '36,00' },
                            { categoria: 'Cartões', valor: '209,00' },
                            { categoria: 'Outros', valor: '100,00' },
                            { categoria: 'Transporte', valor: '50,49' },
                            { categoria: 'Academia', valor: '89,90' },
                            { categoria: 'Viagem', valor: '150,00' },
                            { categoria: 'Cigarro', valor: '12,25' },
                            { categoria: 'Cinema', valor: '45,00' },
                            { categoria: 'Internet', valor: '120,00' },
                        ]}
                        renderItem={({ item }) => <Despesa categoria={item.categoria} valor={item.valor} />}
                    />
                </NativeBaseProvider>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    filtro: {
        flex: 1.4,
        padding: 8,
        backgroundColor: '#003B45',
        borderRadius: 8,
        margin: 8
    },
    periodoHistorico: {
        borderRadius: 8,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    periodoCategoria: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    fonteHistorico: {
        fontSize: 20,
        color: '#003B45'
    },
});

export default TelaHistorico;