import {
    Dimensions,
    Modal as RNModal,
    ModalProps,
    Pressable,
    View,
    StyleSheet,
    Keyboard
} from 'react-native';
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
        useState<null | { top?: number, right: number, bottom?: number }>(null);
    const [viewHeight, setViewHeight] = useState(0);

    const colors = useThemeColors();

    useEffect(() => {
        Keyboard.removeAllListeners('keyboardDidShow');
        Keyboard.removeAllListeners('keyboardDidHide');

        keyboardDidShow();
        stateModal(isOpen);
    }, [isOpen, viewHeight]);

    const keyboardDidShow = () => {
        Keyboard.addListener("keyboardDidShow", () => {
            setWindowPosition({top: 10, right: 10});

        });
        Keyboard.addListener("keyboardDidHide", () => {
            setModalPosition(position);
        });
    }

    const stateModal = (state: boolean) => {
        if (state) {
            setModalPosition(position);
        }
        setIsVisible(state);
    };

    const setModalPosition = (pos: string) => {
        const {height} = Dimensions.get('window');

        switch (pos) {
            case "top":
                setWindowPosition({top: 10, right: 10});
                break;
            case "center":
                setWindowPosition({top: (height / 2 - (viewHeight / 2)), right: 10});
                break;
            case "bottom":
                setWindowPosition({bottom: 10, right: 10});
                break;
        }
    }

    const handleLayout = (event: { nativeEvent: { layout: { height: number; }; }; }) => {
        const {height} = event.nativeEvent.layout;
        setViewHeight(height);
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
            <View onLayout={handleLayout} style={[styles.popup, {backgroundColor: colors.white, ...windowPosition}]}>
                {children}
            </View>
        </RNModal>
    );
};

const styles = StyleSheet.create({
    popup: {
        position: 'absolute',
        width: '95%',
        padding: 12,
        borderRadius: 12,
        ...Shadows.dp2
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
});
