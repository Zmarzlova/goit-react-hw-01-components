import PropTypes from "prop-types"
import { FriendUl } from "./FriendList.styled"
import { FriendListItem } from "./FriendListItem"


export const FriendList = ({ friends }) => {
    return <FriendUl>
        {friends.map(friend => (
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </FriendUl>
}

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
}