import React, {Component} from "react";
import ReactDOM from "react-dom";


import './chat.css';
import Header  from '../header' ;
import Footer  from '../footer' ;
import ChatContentPanel from '../chat-content-panel';




export default class Chat extends Component{

  componentDidMount(){
   const {chatService} = this.props;

   chatService.getMessages()
   .then((item) => {
     this.setState({messages:item});
     this.setState({loaded: true});
    })
   .catch((item) => console.log(item));
 
  }
  state = {
    loaded: false
  };
 
  addMessage = (message) => {
    const {messages} = this.state;
    const index = messages.findIndex(item => item.id === message.id);
    if (index !== -1){
      messages[index] = message;
      this.setState({
        messages : [...messages, ]
      });
      return;
    }

    this.setState({
      messages : [...messages, message]
    });
  }


  removeMessage = (id) => {
    const {messages} = this.state;
    const index = messages.findIndex(item => item.id ===id && item.user ==='current');
    if (index === -1){
      return;
    }

    this.setState({
      messages : [...messages.filter(item => item.id !== id)]
    });
  }
  
  render(){
    const {loaded, messages} =  this.state ;

      return (<div>
                 <Header />
                   <ChatContentPanel removeMessage={this.removeMessage} addMessage = {this.addMessage} loaded ={ loaded} messages ={  messages } />}
                 <Footer/>
            </div>)
  }
}