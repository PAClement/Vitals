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
                acceptFriendRequest(id);
                break;
            case "reject":
                rejectFriendRequest(id);
                break;
        }
    }

    const acceptFriendRequest = (id: number) => {
        console.log("Accepted " + id);

    }

    const rejectFriendRequest = (id: number) => {
        console.log("Reject " + id);
    }

    return (
        <Pressable>
            <Button title={title} color={color} accessibilityLabel={accessibilityLabel} onPress={actionButton}/>
        </Pressable>
    );
}