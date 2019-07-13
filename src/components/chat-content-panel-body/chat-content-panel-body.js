import React from 'react';
import Message from '../message';
import logo from "../../images/logo2.jpg";

import "./chat-content-panel-body.css";

const ChatContentPanelBody = ({messages, removeMessage, editMessage})=>{
    
  const allMessages =  messages.map(item => {
        return <Message removeMessage ={removeMessage} key={item.id} 
                editMessage={editMessage}
                id ={item.id} text={item.message} isUserMessage={item.user !== 'current'} 
                date={item.created_at} image={item.avatar}/>
    });
    return (<div className="content-panel-body-wrapper">
        {
            allMessages
        }
           </div>);
};

export default ChatContentPanelBody;