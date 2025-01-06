import {router} from 'expo-router';
import {Button, Text, View} from 'react-native';

import {useSession} from '@/ctx';

export default function SignIn() {
    const {signIn} = useSession();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={() => {
                signIn();
                router.replace('/');
            }} title={'Click to login'}></Button>
        </View>
    );
}
