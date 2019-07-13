import React,{Component} from 'react';

import ChatContentPanelHeader from '../chat-content-panel-header';
import ChatContentPanelBody from '../chat-content-panel-body';
import ChatContentPanelFooter from '../chat-content-panel-footer';
import Spinner from '../spinner';
import "./chat-content-panel.css";

class ChatContentPanel extends Component {

    state={
        editMessage: null
    }

    editMessage = (id, text) => {
        this.setState({  editMessage:{id,text}})
    }

    editFinished =() =>{
        this.setState({editMessage: null});
    }

render(){

   const  {messages, loaded, addMessage, removeMessage} = this.props;
        return (<div className='ChatContentPanelWrapper'>
                   <ChatContentPanelHeader/>
                   {loaded? <ChatContentPanelBody editMessage={this.editMessage} removeMessage ={removeMessage} messages ={messages}/> : <Spinner/>}
                   <ChatContentPanelFooter addMessage = {addMessage} editFinished ={this.editFinished }  
                   id={this.state.editMessage? this.state.editMessage.id : null} 
                   text ={this.state.editMessage? this.state.editMessage.text : null}/>
               </div>);
    };
}


export default ChatContentPanel;