
import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./chat-content-panel-footer.css";


export default class ChatContentPanelFooter extends Component{

    state = {
        text: ''
    }

    componentWillReceiveProps(nextprops){
        const { text} = nextprops;
        if (text){
            this.setState({text});
        }
    }
    
     onSendClick = (id) => {
         debugger;
        const {text} = this.state;
        const { editFinished } = this.props;
        if (text.length === 0){
            if (id && editFinished){
                editFinished();
            }
            return;
        }


        let date = new Date().toDateString();
     
        let idMs = id? id : Math.floor(Math.random() * (50000000 - 1) ) + 1
  
        const {addMessage} = this.props;
        addMessage({ key: idMs,
                   id: idMs,
                   user: 'current',
                    message:text,
                    created_at: date
                   });

        this.setState({text:''});
        if(id && editFinished){
            editFinished();
        }       
       }

       onChangeTextBox = (event) =>{
        const text = event.target.value;
         this.setState({text});
       }

    render () {
       const {id} = this.props;
    
             return (
             <div className="chatContentPanelFooterWrapper">
                <input onChange ={this.onChangeTextBox } value = {this.state.text}  id='messageText' className="messageText" type="text" placeholder="message" name="message" required></input>
                <button onClick = {() => this.onSendClick(id)}>Send</button>
           </div>);
    }
           
};
