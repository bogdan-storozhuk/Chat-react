import React from 'react';
import {ChatServiceConsumer} from '../chat-service-context';

const withChatService = (Wrapped) =>{
    return (props)=>{
        return (
            <ChatServiceConsumer>
                {
                    (chatService) =>{
     
                        return <Wrapped {...props} {...chatService}></Wrapped>
                    }
                }
            </ChatServiceConsumer>
        )
    }
}

export default withChatService;