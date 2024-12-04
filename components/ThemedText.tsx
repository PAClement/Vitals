import {StyleSheet, Text, type TextProps} from "react-native";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Colors} from "@/constants/Colors";

const styles = StyleSheet.create({
    body: {
        fontSize: 10,
        lineHeight: 16,
    },
    headline: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
    }
})

type Props = TextProps & {
    variant?: keyof typeof styles,
    color?: keyof typeof Colors['light'],
}

export function ThemedText({variant, color, style, ...rest}: Props) {
    const colors = useThemeColors();

    return <Text style={[styles[variant ?? 'body'], {color: colors[color ?? 'primary']}, style]} {...rest} />
}
