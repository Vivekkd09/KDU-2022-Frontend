import React from 'react'
import profileImage from '../imageFolder/-mktotc.jpg'
import image from "../svg/multiple-images-svgrepo-com.svg"
import gif from '../svg/gif-svgrepo-com.svg'
import poll from "../svg/poll-svgrepo-com.svg"
import smily from '../svg/smiley-svgrepo-com.svg'
import sched from '../svg/schedule-svgrepo-com.svg'
import location from '../svg/location-svgrepo-com.svg'
import "./popup.css"


export default function postTweet(props) {
  return(props.trigger) ?  (
    <div className='PopUptweet'>
    <div className="pop-upform">
      <div class="form-popup-header">
          <button type="button" className="btn-cancel" onClick={()=> props.setTrigger(false)}>X</button>
      </div>
       <form action="http://127.0.0.1:8000/process_post" class="form-container" method="post">
                    <div class="tweet-popup-screen">
                        <img alt='profileImage' id="user-dp-img" src={profileImage}/>
                        <textarea placeholder="What's happening!" name="tweet" autofocus class="textcont"></textarea>
                    </div>
                    <div id="svg-container">
                    <img alt='postImage' className="post-svg" src={image}/>
                    <img alt='postGif' className="post-svg" src={gif}/>
                    <img alt='postPoll' className="post-svg" src={poll}/>
                    <img alt="postEmoji" className="post-svg" src={smily}/>
                    <img alt='postSchedule' className="post-svg" src={sched}/>
                    <img alt='postLocation' className="post-svg" src={location}/>
                    <input type="submit" value="Post" class="btn-post"/>
                    </div>
                    
                </form>
    </div>
    </div>
  ) : "";
}
