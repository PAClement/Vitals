import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useState} from "react";
import {ThemedText} from "@/components/ThemedText";

export default function SignUp() {

    const [step, setStep] = useState(0);

    const FormSignUp = () => {

        console.log('Sign Up');
    };

    return (
        <>
            {(() => {
                switch (step) {
                    case 0:
                        return <>
                            <TextInput keyboardType={'email-address'} inputMode={'email'} style={styles.input}
                                       placeholder={'Email'}></TextInput>
                            <View style={{marginTop: 15}}>
                                <Button onPress={() => setStep(1)} title={"S'inscrire"}></Button>
                            </View>
                        </>
                    case 1:
                        return <>
                            <TextInput keyboardType={'default'} inputMode={'text'} style={styles.input}
                                       placeholder={'Nom'}></TextInput>
                            <View style={{marginTop: 15}}>
                                <Button onPress={() => setStep(2)} title={"Continuer"}></Button>
                            </View>
                        </>
                    case 2:
                        return <>
                            <TextInput keyboardType={'default'} inputMode={'text'} secureTextEntry={true}
                                       style={styles.input}
                                       placeholder={'Mot de passe'}></TextInput>
                            <TextInput keyboardType={'default'} inputMode={'text'} secureTextEntry={true}
                                       style={styles.input}
                                       placeholder={'Confirmer le Mot de passe'}></TextInput>
                            <View style={{marginTop: 15}}>
                                <Button onPress={() => setStep(3)} title={"Continuer"}></Button>
                            </View>
                        </>
                    case 3:
                        return <>
                            <TextInput keyboardType={'default'} inputMode={'text'} secureTextEntry={true}
                                       style={styles.input}
                                       placeholder={'Choisir un PIN'}></TextInput>
                            <View style={{marginTop: 15}}>
                                <Button onPress={() => setStep(0)} title={"S'inscrire"}></Button>
                            </View>
                        </>
                }
            })()}
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
