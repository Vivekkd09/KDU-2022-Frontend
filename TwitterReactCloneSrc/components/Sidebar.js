import "./Sidebar.css"
import React from 'react'
import bird from "../svg/twitter-logo-shape-svgrepo-com.svg"
import home from "../svg/home-svgrepo-com.svg"
import explore from "../svg/search-svgrepo-com.svg"
import notification from "../svg/notification-svgrepo-com.svg"
import messages from "../svg/message-svgrepo-com.svg"
import bookmarks from "../svg/bookmark-svgrepo-com.svg"
import list from "../svg/list-svgrepo-com.svg"
import more from "../svg/more-svgrepo-com.svg"
import profile from "../svg/profile-svgrepo-com.svg"
import { useState} from 'react';
import PopUp from "./postTweet";

function Sidebar() {
    const [popupbut,setPopUpBut]= useState(false);

    return(
        <div className="sideBar">
            <img alt="twitterLogo" className="left-btns" src={bird} />
            <button className="left-btns"> <img src={home} alt="home" class="left-svg"/> Home </button>
            <button className="left-btns"> <img src={explore} alt="explore" class="left-svg"/> Explore </button>
            <button className="left-btns"> <img src={notification} alt="notificactions" class="left-svg"/> Notifications </button>
            <button className="left-btns"> <img src={messages} alt="messages" class="left-svg"/> Messages </button>
            <button className="left-btns"> <img src={bookmarks} alt="bookmarks" class="left-svg"/> Bookmarks </button>
            <button className="left-btns"> <img src={list} alt="lists" class="left-svg"/> Lists </button>
            <button className="left-btns"> <img src={profile} alt="profile" class="left-svg"/> Profile </button>
            <button className="left-btns"> <img src={more} alt="more" class="left-svg"/> More </button>
            <button className="left-btns-tweet" onClick={()=>setPopUpBut(true)}>  Tweet </button>
            <PopUp trigger={popupbut} setTrigger={setPopUpBut}></PopUp>  
        </div>
        
    )
}

export default Sidebar

