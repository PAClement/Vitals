import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useSession} from "@/ctx";
import {router} from "expo-router";

export default function SignIn() {
    const {signIn, session} = useSession();

    const FormSignIn = () => {

        //Jwt test (api token)
        const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
            "eyJpZCI6IjEyMzQ1Njc4OTAiLCJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJEb2UiLCJpYXQiOjE3MzgxNDQ3MzIsImV4cCI6MTgzODI1MDAwMH0." +
            "Uv8kZbDQQix0rgmI5i2G2sw1dVQUvtYY_9mLrUjgyWo";

        signIn(jwt);
        router.replace('/');
    };
    return (
        <>
            <TextInput keyboardType={'email-address'} inputMode={'email'} style={styles.input}
                       placeholder={'Email'}></TextInput>
            <TextInput keyboardType={'default'} inputMode={'text'} secureTextEntry={true} style={styles.input}
                       placeholder={'Mot de passe'}></TextInput>
            <View style={{marginTop: 15}}>
                <Button onPress={FormSignIn} title={'Se connecter'}></Button>
            </View>
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
