import {StyleSheet, Text, type TextProps} from "react-native";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Colors} from "@/constants/Colors";

const styles = StyleSheet.create({
    headline: {
        fontSize: 24,
        lineHeight: 32,
    },
    body: {
        fontSize: 10,
        lineHeight: 16,
    },
    caption: {
        fontSize: 8,
        lineHeight: 12,
    },
    subtitle1: {
        fontSize: 14,
        lineHeight: 16,
    },
    subtitle2: {
        fontSize: 12,
        lineHeight: 16,
    },
    subtitle3: {
        fontSize: 10,
        lineHeight: 16,
    }
})

type Props = TextProps & {
    variant?: keyof typeof styles,
    color?: keyof typeof Colors['light'],
    align?: 'left' | 'right' | 'center' | 'justify',
}

export function ThemedText({variant, color, align, style, ...rest}: Props) {
    const colors = useThemeColors();

    return <Text style={[styles[variant ?? 'body'], {
        color: colors[color ?? 'primary'],
        textAlign: align ?? 'left'
    }, style]} {...rest} />
}
