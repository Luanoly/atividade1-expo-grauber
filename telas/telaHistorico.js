import { View, Text, StyleSheet } from 'react-native';

const TelaHistorico = () => {
    return (
        <View style={styles.container}>

            <View style={styles.telaSuperior}>
                <Text>PoupCerto</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
});

export default TelaHistorico;