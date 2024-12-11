import {Dimensions, Modal as RNModal, ModalProps, Pressable, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from "react";
import {Shadows} from "@/constants/Shadows";
import {useThemeColors} from "@/hooks/useThemeColors";

type props = ModalProps & {
    isOpen: boolean;
    onClose: () => void;
    position: "top" | "center" | "bottom";
}

export default function Modal({isOpen, onClose, position, children, ...rest}: props) {

    const [isVisible, setIsVisible] = useState(false);
    const [windowPosition, setWindowPosition] =
        useState<null | { top?: number, right: number, bottom?: number }>(null)

    const colors = useThemeColors();

    useEffect(() => {
        stateModal(isOpen);
    }, [isOpen]);

    const stateModal = (state: boolean) => {
        const {height} = Dimensions.get('window');
        if (state) {
            switch (position) {
                case "top":
                    setWindowPosition({top: 10, right: 10});
                    break;
                case "center":
                    setWindowPosition({top: height / 2, right: 10});
                    break;
                case "bottom":
                    setWindowPosition({bottom: 10, right: 10});
                    break;
            }
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
            <View style={[styles.popup, {backgroundColor: colors.white, ...windowPosition}]}>
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
