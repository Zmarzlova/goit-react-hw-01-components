import PropTypes from "prop-types"
import { Avatar, Item, Name, Status } from "./FriendListItem.styles"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <Item>
    <Status style={{ background: (isOnline? "green" : "red") }}></Status>
 
    <Avatar src={avatar} alt={name} width="48" />
     <Name>{name}</Name>
</Item>
}

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}