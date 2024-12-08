import {Button, type ViewProps, ViewStyle} from "react-native";

type Props = ViewProps & {
    title: string,
    color: string
}

export default function ThemedButton({title, color, ...rest}: Props) {
    return (
        <Button title={title} color={color} {...rest}/>
    );
}

const styles = {
    borderRadius: 8
}satisfies ViewStyle