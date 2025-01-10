import React, { Component } from "react";
import "./Style.css";
import { useState } from "react";

export class Post extends Component {
  render() {
    function details() {
     fetch ()
    }
    
    return (

    
      <div className="video-card">
        <div className="thumbnail-container">
          <img
            src="/api/placeholder/360/200"
            alt="Video thumbnail"
            className="thumbnail hover-effect"
          />
          <div className="duration">10:28</div>
        </div>
        <div className="video-info">
          <div className="channel-avatar" />
          <div className="video-details">
            <h3 className="video-title">
              Building a YouTube Clone with HTML &amp; CSS - Web Development
              Tutorial
            </h3>
            <p className="channel-name">Coding Tutorial</p>
            <div className="video-stats">
              <span>1.2M views</span>
              <span>•</span>
              <span>2 months ago</span>
            </div>
          </div>
          <div className="options-btn">⋮</div>
        </div>
      </div>
      
    );
  }
}

export default Post;
