import React, {useEffect, useState} from 'react'
import './App.css';

import Message from './Message.js'
import Input from './Input'
import useFakeMessage from './useFakeMessage'
import useFakeConvo from './useFakeConvo'
import useScrollToBottom from './useScrollToBottom'

const initialState = [
  {id:1, content:'Hey there!!', from :'me'},
  {id:2, content:'Yeah!! How you doing??', from :'joey'},
  {id:3, content:'HAHAHA!!', from :'me'}
]

const App = () => {

  let [messages, setMessages] = useState(initialState)
  let [currentMessage, setCurrentMessage] = useState('')
  
  useFakeConvo(setMessages);

  let scrollRef = useScrollToBottom(messages)


  return (
  <div styles={styles.wrapper}>
    <div styles={styles.container} ref= {(ref) => (scrollRef.current == ref)}>
      {messages.map((message) => <Message key={message.id} message = {message} />)}
    </div>

    <Input 
    value = {currentMessage}
    onChange = {(content) => setCurrentMessage(content)}
    onEnter = {(content) => {
      setCurrentMessage('');
      setMessages([...messages, 
      {id : messages.length + 1, content, from:'me' },])
    }} />

  </div>)
};

const styles = {
  wrapper:{
    display: 'flex',
    height:'100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  container:{
    display: 'flex',
    overflow: 'scroll',
    height:'max-content',
    flexDirection:'column',
  }
}

export default App;
