import React, { useState } from 'react';
import './sidebar.css';
const Sidebar = () => {

    const [extended, setExtended] = useState(false);


    return (
        <div className='sidebar'>
            <div className="top">
                <i onClick={()=> setExtended(prev => !prev)} className="icon fa-solid fa-bars"></i>

                <div className="new-chat">
                    <i className="icon fa-solid fa-plus"></i>
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended 
                ?
                <div className="recent">
                <p className="recent-title">Recent</p>
                <div className='recent-entry'>
                <i className="icon fa-regular fa-comment"></i>
                    <p>What is react ...</p>
                </div>
            </div>
                : null
            }
            </div>

            <div className="bottom">

                <div className="bottom-item recent-entry">
                    <i className="icon fa-regular fa-circle-question"></i>
                    {extended ? <p>Help</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <i className="icon fa-solid fa-clock-rotate-left"></i>
                    {extended ? <p>Activity</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <i className="fa-solid fa-gear"></i>
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;