import { StyleSheet, Text, View } from "react-native"
import { Button, TextInput } from "react-native-paper";

const TelaLogin = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.login}>
                    <Text style={{ color: '#f5f5f5', fontSize: 24, marginBottom: 16 }}>PoupCerto</Text>
                    <TextInput width={260} label="E-mail" style={{ borderRadius: 8, marginBottom: 8 }} ></TextInput>
                    <TextInput width={260} label="Senha" style={{ borderRadius: 8, marginBottom: 8 }} ></TextInput>
                    <Button mode="elevated" buttonColor='#004B57' onPress={() => navigation.navigate('MenuInferior')} textColor='#fff'>Entrar</Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    background: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#004B57',
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 300,
        paddingBottom: 300

    },
    login: {
        flex: 1.4,
        padding: 28,
        backgroundColor: '#003B45',
        borderRadius: 8,
        margin: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    fontePadrao: {
        fontSize: 20,
        color: '#f5f5f5'
    },
});

export default TelaLogin;