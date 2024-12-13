import {Button, Pressable} from "react-native";

type Props = {
    id: number,
    state: "accepted" | "reject",
    title: string,
    color: string,
    accessibilityLabel: string
}

export default function ButtonManageFriends({id, state, title, color, accessibilityLabel}: Props) {

    const actionButton = () => {
        switch (state) {
            case "accepted":
                console.log("Accepted " + id);
                break;
            case "reject":
                console.log("Reject " + id);
                break;
        }
    }

    return (
        <Pressable>
            <Button title={title} color={color} accessibilityLabel={accessibilityLabel} onPress={actionButton}/>
        </Pressable>
    );
}