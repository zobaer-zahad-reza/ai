import React, { useContext } from 'react';
import './Main.css'
import { Context } from '../../context/Context';
import userImg from'./usersIcon.jpg'
import zImg from './image.jpg';


const Main = () => {

    const {onSent, recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>Hacker</p>
                <img src="/src/components/Main/image.jpg" alt="" />
            </div>
            {/* main container */}
            <div className="main-container">
                {!showResult 
                ?<>
                    <div className="greet">
                    <p><span>Abbe, Sale.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <i className="fa-regular fa-compass"></i>
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <i className="fa-regular fa-lightbulb"></i>
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for out work retreat</p>
                        <i className="fa-regular fa-message"></i>
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <i className="fa-solid fa-code"></i>
                    </div>
                </div>
                </> 
                : <div className='result'>
                    <div className='result-title'>
                        <img src={userImg} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={zImg} alt="" />
                        {loading 
                        ?
                        <div className='loader'>
                            <hr/>
                            <hr/>
                            <hr/>
                        </div>
                        : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                        
                    </div>
                </div>
            }
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                        <div>
                            <i className="fa-regular fa-image"></i>
                            <i className="fa-solid fa-microphone"></i>
                            <i onClick={()=>onSent()} className="fa-regular fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;