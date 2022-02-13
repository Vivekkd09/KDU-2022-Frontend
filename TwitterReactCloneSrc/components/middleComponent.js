import React from 'react'
import profileImage from '../imageFolder/-mktotc.jpg'
import image from "../svg/multiple-images-svgrepo-com.svg"
import gif from '../svg/gif-svgrepo-com.svg'
import poll from "../svg/poll-svgrepo-com.svg"
import smily from '../svg/smiley-svgrepo-com.svg'
import sched from '../svg/schedule-svgrepo-com.svg'
import location from '../svg/location-svgrepo-com.svg'
import  "./Sidebar.css"

export default function middleComponent() {
  return (
    <div className="mid-panel">
            <div className="home-title"><h2>Home</h2></div>

            <div className="post-Tweet">
                <div className="abc">
                    <img alt='ProfileImage' className="user-dp-img" src={profileImage}/>
                    <input type="text" id="post-Tweet-inp-box" placeholder="What's Happening?"/>
                </div>
                <div id="svg-container">
                    <img alt='postImage' className="post-svg" src={image}/>
                    <img alt='postGif' className="post-svg" src={gif}/>
                    <img alt='postPoll' className="post-svg" src={poll}/>
                    <img alt="postEmoji" className="post-svg" src={smily}/>
                    <img alt='postSchedule' className="post-svg" src={sched}/>
                    <img alt='postLocation' className="post-svg" src={location}/>
                    <button id="post-btn">Tweet</button>
                </div>
            </div>

            <div id="feed-tweets">
                <b>YOUR FEED</b>
                <div id="feed-tweets-list">
                   <div id="tweet-item">
                   </div>
                </div>
            </div>
        </div>
  )
}
