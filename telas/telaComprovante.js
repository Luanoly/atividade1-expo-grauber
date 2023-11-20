import { View } from "react-native"

const TelaComprovante = () => {
    return(
        <View style={styles.container}>
            <View style={styles.parteSuperior}>
                    <Avatar.Icon size={28} icon="chevron-left"/>
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
});

export default TelaComprovante;