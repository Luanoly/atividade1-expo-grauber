import { StyleSheet, Text, View } from "react-native"
import { Avatar } from "react-native-paper";

const TelaComprovante = () => {
    return (
        <View style={styles.container}>
            <View style={styles.parteSuperior}>
                <Avatar.Icon size={28} icon="chevron-left" />
                <Text>PoupCerto</Text>
            </View>

            <View style={styles.informacao}>
                <Avatar.Icon size={90} backgroundColor={'#A1DCE5'} icon={"gift"} />
                <View>
                    <Text style={styles.informacaoProduto}>Shopping</Text>
                    <Text style={styles.informacaoProduto}>20/11/2023</Text>
                </View>
            </View>

            <View style={styles.descricao}>
                <Text>Descrição</Text>
            </View>

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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    parteSuperior: {
        flex: 0.4,
        backgroundColor: '#004B57',
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 8
    },
    informacao: {
        flex: 0.5,
        margin: 24,
        padding: 8,
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    informacaoProduto: {
        fontSize: 20,
        color: '#004B57',
        backgroundColor: '#A1DCE5',
        margin: 4,
        padding: 4,
        borderRadius: 4,
    },
    descricao: {
        flex: 2,
        backgroundColor: '#A1DCE5',
        margin: 24,
        borderRadius: 4
    },
    fontePadrao: {
        fontSize: 20,
        color: '#fff'
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
});

export default TelaComprovante;