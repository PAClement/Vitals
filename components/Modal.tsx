import {Dimensions, Modal as RNModal, ModalProps, Pressable, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from "react";
import {Shadows} from "@/constants/Shadows";
import {useThemeColors} from "@/hooks/useThemeColors";

type props = ModalProps & {
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({isOpen, onClose, children, ...rest}: props) {

    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState<null | { top: number, right: number }>(null)

    const colors = useThemeColors();

    useEffect(() => {
        stateModal(isOpen);
    }, [isOpen]);

    const stateModal = (state: boolean) => {
        const {height} = Dimensions.get('window');
        if (state) {
            setPosition({top: height / 2, right: 10});
        }
        setIsVisible(state);
    };

    return (
        <RNModal transparent visible={isVisible} onRequestClose={() => {
            stateModal(false);
            onClose();
        }}  {...rest}>
            <Pressable style={styles.backdrop} onPress={() => {
                stateModal(false);
                onClose();
            }}></Pressable>
            <View style={[styles.popup, {backgroundColor: colors.white, ...position}]}>
                {children}
            </View>
        </RNModal>
    );
};

const styles = StyleSheet.create({
    popup: {
        position: 'absolute',
        width: '95%',
        padding: 4,
        borderRadius: 12,
        ...Shadows.dp2
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
});
