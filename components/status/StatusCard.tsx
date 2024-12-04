import {ViewStyle} from "react-native";
import {Card} from "@/components/Card";
import {ThemedText} from "@/components/ThemedText";

type Props = {
    style: ViewStyle,
    id: number,
    name: string
}

export function StatusCard({style, id, name}: Props) {
    return <Card style={style}>
        <ThemedText variant='headline'>#{id.toString().padStart(3, '0')}</ThemedText>
    </Card>
}