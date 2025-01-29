import {View, TextInput, Button, StyleSheet} from 'react-native';

export default function SignUp() {

    const FormSignUp = () => {

        console.log('Sign Up');
    };

    return (
        <>
            <>
                <TextInput keyboardType={'default'} inputMode={'text'} style={styles.input}
                           placeholder={'Nom'}></TextInput>
                <TextInput keyboardType={'email-address'} inputMode={'email'} style={styles.input}
                           placeholder={'Email'}></TextInput>
                <TextInput keyboardType={'default'} inputMode={'text'} secureTextEntry={true} style={styles.input}
                           placeholder={'Mot de passe'}></TextInput>
                <TextInput keyboardType={'default'} inputMode={'text'} secureTextEntry={true} style={styles.input}
                           placeholder={'Confirmer le Mot de passe'}></TextInput>
                <View style={{marginTop: 15}}>
                    <Button onPress={FormSignUp} title={"S'inscrire"}></Button>
                </View>
            </>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
});
