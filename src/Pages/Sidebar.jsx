import React from 'react';
import './Style.css';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-item active">🏠 Home</div>
      <div className="sidebar-item">🎬 Shorts</div>
      <div className="sidebar-item">✅ Subscriptions</div>
      <div className="sidebar-item">📚 You</div>
      <div className="sidebar-item">⏱️ History</div>
      <hr style={{ margin: '12px 0', borderColor: '#272727' }} />
      <div className="sidebar-item">🎵 Music</div>
      <div className="sidebar-item">🎮 Gaming</div>
      <div className="sidebar-item">📰 News</div>
      <div className="sidebar-item">⚽ Sports</div>
      <div className="sidebar-item">📚 Learning</div>
      <div className="sidebar-item">👗 Fashion & Beauty</div>
    </nav>
  );
}
