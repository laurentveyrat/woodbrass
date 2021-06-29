import React, { useState } from 'react';
// import M from 'materialize-css';
import Chatbot from '../chatbot/Chatbot'
import './ChatbotButton.scss'

function ChatbotButton() {
    var [ isChatboxOpen, setChatboxOpen ] = useState(false)
    
    function handleClick() {
        setChatboxOpen(!isChatboxOpen)
    }

    return (
        <div className="fixed-action-btn">
            <a href="#!" className="btn-floating btn-large z-depth-5" onClick={handleClick}>
                {isChatboxOpen && <i className="large material-icons">close</i> }
                <i className="large material-icons">question_answer</i>
            </a>
            {isChatboxOpen && <Chatbot /> }
        </div>
    );
};

export default ChatbotButton;