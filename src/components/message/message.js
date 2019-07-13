import React from 'react';
import "./message.css";

const onLikeClick = (event) => {
  if(event.target.innerText == 'Like'){
    event.target.innerText = '1';
  }
  else{
    event.target.innerText = 'Like';
  }

}
const Message = ({text, image, isUserMessage, likes, date, id, removeMessage, editMessage })=>{
    const className = isUserMessage? 'message-user' : 'message-me';

    return (
    <div className={className}>
         <img src={image} className="user-img"/>
          <p className="user-message">{text}</p>
          <p className="user-date">{date}</p>
            <button onClick={onLikeClick} type="button" className="user-likeButton">Like</button>
          
            {
              !isUserMessage? <button type="button"  onClick = {() => removeMessage(id)}  
              className="user-deleteButton">Delete</button> :null
            }
            {
              !isUserMessage?
              <button type="button"  onClick = {() => editMessage(id, text)}  
              className="user-editButton">Edit</button> : null
            }
        
          
         
            
    </div>)
};

export default Message;