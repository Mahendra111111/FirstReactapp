import React from 'react'
import './Style.css';

export default function Header() {
  return (
    <header>
  <div className="header-left">
    <div className="menu-icon">☰</div>
    <div className="youtube-logo">
      <span className="icon">▶</span>
      YouTube<sup>IN</sup>
    </div>
  </div>
  <div className="header-middle">
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button className="search-button">🔍</button>
    </div>
    <div className="voice-search">🎤</div>
  </div>
  <div className="header-right">
    <div className="create">📹</div>
    <div className="notifications">🔔</div>
    <div className="profile">👤</div>
  </div>
</header>

  )
}
