import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const TelaDespesa = () => {
    return (
        <View style={styles.container}>

            <View style={[styles.telaSuperior]}>
                <View>
                    <Text style={{ color: 'white', fontSize: 32, marginLeft: 24, marginTop: 40 }}>PoupCerto</Text>
                    <Text style={{ color: 'white', fontSize: 28, marginLeft: 24, marginTop: 10 }}>R$: 1.236,43</Text>
                </View>
            </View>

            <View style={styles.inserirDespesa}>
                <View style={{ padding: 4, alignItems: 'center', }}>
                    <Text style={{ fontSize: 24, color: 'white' }}>Inserir Despesa</Text>
                </View>
                <View sytle={styles.atributosDespesas}>
                    <View style={styles.colunaDespesaUm}>
                        <TextInput label="R$: 00,00" />
                    </View>
                </View>
            </View>

            <View style={styles.descricao}>
                <TextInput label="Descrição..." />
            </View>

            <View style={styles.menu}>

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
        backgroundColor: '#6AAAE6',
        height: 70,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderColor: 'white',
        borderBottomWidth: 2,
        borderStyle: 'solid'
    },
    inserirDespesa: {
        flex: 2,
        backgroundColor: '#6AAAE6',
        borderRadius: 4,
        padding: 10,
        margin: 8,
    },
    atributosDespesas: {
        alignItems: 'stretch',
    },
    colunaDespesaUm: {
        width: 150,
    },
    descricao: {
        flex: 1,
        borderWidth: 4,
        borderColor: '#6AAAE6',
        borderRadius: 4,
        padding: 4,
        margin: 12,
    },
    menu: {
        flex: 0.4,
        borderTopWidth: 2,
        borderColor: 'white',
        backgroundColor: '#6AAAE6'
    },
});

export default TelaDespesa;
