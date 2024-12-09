import {View, Modal as RNModal, ModalProps} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";

type props = ModalProps & {
    isOpen: boolean;
}

export default function Modal({isOpen, children, ...rest}: props) {

    const [isVisible, setIsVisible] = useState(isOpen);
    const stateModal = (state: boolean) => {
        setIsVisible(state);
    };

    return (
        <SafeAreaView>
            <RNModal visible={isVisible} transparent animationType={'fade'} onRequestClose={() => stateModal(false)}
                     statusBarTranslucent {...rest}>
                <View>
                    {children}
                </View>
            </RNModal>
        </SafeAreaView>
    );
};
