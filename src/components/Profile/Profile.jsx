import PropTypes from 'prop-types'
import css from './Profile.module.css'

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats:{ followers, views, likes }}) => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          width={100}
          height={100}
          alt="User avatar"
          class="avatar"
          />
        <p class="name">{username}</p>
        <p class="tag">{tag }</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{ followers }</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>      
  )
}