import {router} from 'expo-router';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {useSession} from '@/ctx';
import RootView from "@/components/RootView";
import {ThemedText} from "@/components/ThemedText";

export default function SignIn() {
    const {signIn} = useSession();
    return (
        <RootView style={{gap: 15}}>
            <ThemedText variant={"headline"} align={'center'}>Vitals</ThemedText>
            <View>
                <TextInput keyboardType={'email-address'} inputMode={'email'} style={styles.input}
                           placeholder={'Email'}></TextInput>
                <TextInput keyboardType={'default'} inputMode={'text'} secureTextEntry={true} style={styles.input}
                           placeholder={'Mot de passe'}></TextInput>
            </View>
            <Button onPress={() => {
                signIn();
                router.replace('/');
            }} title={'Click to login'}></Button>
        </RootView>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
});