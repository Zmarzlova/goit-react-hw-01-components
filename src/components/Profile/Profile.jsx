import PropTypes from "prop-types"
import { Avatar, Description, Label, Name, ProfileUser, Quantity, Stats, Tag, Location, Item } from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileUser>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <Item>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </Item>
    <Item>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </Item>
    <Item>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </Item>
  </Stats>
</ProfileUser>
}

Profile.protoTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    }).isRequired,
    
}