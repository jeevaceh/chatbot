import "./App.css";
import gptlogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import bookmark from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sntBtn from "./assets/send.svg";
import userImg from "./assets/user.png";
import chatLogo from "./assets/chatgptLogo.svg";
import {chatFunction} from "./openai.js";
import { useEffect, useRef, useState } from "react";

function App() {
  const msgEnd= useRef(null)
  const [input,setInput] = useState("");

  const [messages,setMessages] = useState([{
    text:"I'm ChatGPT, an AI developed by OpenAI, trained on vast amounts of text data to assist users with questions and tasks. My abilities include generating human-like text, understanding context, and providing helpful responses across various topics. While I'm not conscious or emotional, I aim to be a useful tool for engaging conversation and providing information.",
    isBot:true
  }]);

  useEffect(()=>{
    msgEnd.current.scrollIntoView()
  },[messages])

  const  handleSent = async() => {
    const text = input ;

    setInput("");
    setMessages([...messages, { text, isBot: false }]);

   const res =await chatFunction(input);
   setMessages([
    ...messages,
    {text, isBot:false},
    {text:res, isBot:true},
   ]);

  }

 const handleEnter = async (e) => {
   if (e.key === "Enter") await handleSent();
 };

 const handleQuery = async (e) => {
    const text = e.target.value ;
    setMessages([...messages, { text, isBot: false }]);

   const res =await chatFunction(input);
   setMessages([
    ...messages,
    {text, isBot:false},
    {text:res, isBot:true},
   ]);

 }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperside">
          <div className="uppersideTop">
            <img src={gptlogo} alt="Logo" className="logo" />
            <span className="brand">GPTBot</span>
          </div>
          <button className="midBtn" onClick={()=>{window.location.reload()}}>
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="uppersideBottom">
            <button className="query" onClick={handleQuery}  value={'What is programming?'}>
              <img src={msgIcon} alt="Query" className="logo" />
              What is programming?
            </button>
            <button className="query" onClick={handleQuery} value={ 'How to use an API?'}>
              <img src={msgIcon} alt="Query" className="logo" /> How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={bookmark} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" />
            Upgrade
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => 
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img
                className="chatimg"
                src={message.isBot ? chatLogo : userImg}
                alt="GPTBot"
              />
              <p className="text">{message.text}</p>
            </div>
          )}
          <div ref= {msgEnd}/>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Ask anything !"
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />{" "}
            <button className="send" onClick={handleSent}>
              <img src={sntBtn} alt="Send" className="" />
            </button>
          </div>
        </div>
        <p>
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}

export default App;
