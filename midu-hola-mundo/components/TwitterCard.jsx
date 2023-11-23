import './TwitterCard.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function TwitterCard({ user, name, initialIsFollowing = false, formatUser = (user) => `@${user}` }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  return (
    <article className={`twitter-card ${isFollowing ? 'following' : ''}`}>
      <img src="/vite.svg" alt="" />
      <div>
        <strong style={{
          display: 'block'
        }}>{name}</strong>
        <span>{formatUser(user)}</span>
      </div>

      <button onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? 'Siguiendo' : 'Seguir'}
      </button>

    </article>
  )
}

TwitterCard.propTypes = {
  user: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool,
  formatUser: PropTypes.func
}