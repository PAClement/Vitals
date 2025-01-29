import {StyleSheet, View} from 'react-native';
import RootView from "@/components/RootView";
import {ThemedText} from "@/components/ThemedText";
import SignIn from "@/components/authentication/SignIn";
import SignUp from "@/components/authentication/SignUp";
import {useState} from "react";

export default function Authentication() {
    const [formState, setFormState] = useState('signIn');

    return (
        <RootView style={{gap: 15}}>
            <View style={styles.verticalCenter}>
                <ThemedText variant={"title"} align={'center'}>Vitals</ThemedText>
                <View>
                    {formState === 'signIn' ? <SignIn/> : <SignUp/>}
                </View>
                <View>
                    {formState === 'signIn' ? (
                        <>
                            <ThemedText variant={"subtitle1"} align={'center'} color={'text'}>Pas encore de compte
                                ?</ThemedText>
                            <ThemedText variant={"subtitle1"} align={'center'} onPress={() => setFormState('signOut')}>S'inscrire
                                !</ThemedText>
                        </>
                    ) : (
                        <>
                            <ThemedText variant={"subtitle1"} align={'center'} color={'text'}>Déjà un compte
                                ?</ThemedText>
                            <ThemedText variant={"subtitle1"} align={'center'} onPress={() => setFormState('signIn')}>Se
                                connecter !</ThemedText>
                        </>
                    )}
                </View>
            </View>
        </RootView>
    );
}

const styles = StyleSheet.create({
    verticalCenter: {
        justifyContent: 'space-around',
        height: '100%'
    }
});