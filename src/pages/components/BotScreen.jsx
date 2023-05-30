import React, {useState} from 'react';
import '../../styles/BotScreen.scss';
import { FaUser } from 'react-icons/fa';
import Markdown from "react-markdown";
 

const BotScreen = ({messages, setMessages}) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = { text: inputText, sender: "user" };
      const typingMessage = { text: "typing...", sender: "ai" };
      setMessages([...messages, newMessage, typingMessage]);
      
      console.log(inputText)
      fetch('http://127.0.0.1:8000/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
        body: JSON.stringify({text: inputText}),
        })
        .then(res => res.json()).then(res=>{
          console.log(res);
          let aiMessage = { text: res.reply, sender: "ai" };
          setMessages([...messages, newMessage, aiMessage]);
        })
        .catch(error => {console.error('Error:', error); });
    }
    setInputText("");
  };

  return (
    <div className="chat-container">
      <div className="chat-conversation">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === "user" ? "user" : "ai"}`}
          >
            {message.sender === "user"? (
              <div className="user-icon">
                <FaUser className="icon" />
              </div>
            ):
            <div className="user-icon ai-icon">
                <svg className="circle" width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="192" height="192" rx="96" fill="#434343" fillOpacity="0.45"/>
                <path d="M130.494 108C132.267 108 134.022 108.349 135.66 109.028C137.298 109.706 138.786 110.7 140.04 111.954C141.294 113.208 142.288 114.696 142.966 116.334C143.645 117.972 143.994 119.727 143.994 121.5V126.924C143.995 130.167 143.294 133.372 141.941 136.32C140.587 139.267 138.613 141.887 136.152 144C126.762 152.064 113.316 156 95.976 156C78.636 156 65.208 152.064 55.836 144C53.3788 141.889 51.4065 139.271 50.0541 136.327C48.7017 133.383 48.001 130.182 48 126.942V121.494C48.0016 117.915 49.4246 114.482 51.9562 111.952C54.4877 109.421 57.9206 108 61.5 108H130.494ZM95.376 36.036L95.976 36C97.0634 36 98.114 36.3939 98.9336 37.1086C99.7531 37.8233 100.286 38.8107 100.434 39.888L100.476 40.5L100.47 44.994H121.47C125.05 44.994 128.484 46.4163 131.016 48.9481C133.548 51.4798 134.97 54.9136 134.97 58.494V85.524C134.97 89.1044 133.548 92.5382 131.016 95.0699C128.484 97.6017 125.05 99.024 121.47 99.024H70.47C66.8896 99.024 63.4558 97.6017 60.9241 95.0699C58.3923 92.5382 56.97 89.1044 56.97 85.524V58.5C56.97 56.7266 57.3194 54.9707 57.9982 53.3324C58.677 51.6941 59.672 50.2056 60.9262 48.9519C62.1804 47.6983 63.6693 46.704 65.3079 46.0259C66.9465 45.3478 68.7026 44.9992 70.476 45L91.476 44.994V40.5C91.4762 39.4117 91.8709 38.3603 92.5869 37.5406C93.3028 36.721 94.2916 36.1886 95.37 36.042L95.976 36L95.364 36.042L95.376 36.036ZM82.47 63C81.4606 62.9596 80.4535 63.1235 79.5091 63.4819C78.5646 63.8403 77.7023 64.3858 76.9739 65.0857C76.2454 65.7856 75.6659 66.6254 75.27 67.5547C74.8741 68.4841 74.6701 69.4838 74.6701 70.494C74.6701 71.5042 74.8741 72.5039 75.27 73.4333C75.6659 74.3626 76.2454 75.2024 76.9739 75.9023C77.7023 76.6022 78.5646 77.1477 79.5091 77.5061C80.4535 77.8645 81.4606 78.0284 82.47 77.988C84.4056 77.9105 86.2362 77.0871 87.5784 75.6902C88.9205 74.2933 89.6701 72.4312 89.6701 70.494C89.6701 68.5568 88.9205 66.6947 87.5784 65.2978C86.2362 63.9009 84.4056 63.0775 82.47 63ZM109.428 63C108.419 62.9596 107.412 63.1235 106.467 63.4819C105.523 63.8403 104.66 64.3858 103.932 65.0857C103.203 65.7856 102.624 66.6254 102.228 67.5547C101.832 68.4841 101.628 69.4838 101.628 70.494C101.628 71.5042 101.832 72.5039 102.228 73.4333C102.624 74.3626 103.203 75.2024 103.932 75.9023C104.66 76.6022 105.523 77.1477 106.467 77.5061C107.412 77.8645 108.419 78.0284 109.428 77.988C111.364 77.9105 113.194 77.0871 114.536 75.6902C115.878 74.2933 116.628 72.4312 116.628 70.494C116.628 68.5568 115.878 66.6947 114.536 65.2978C113.194 63.9009 111.364 63.0775 109.428 63Z" fill="url(#paint0_linear_35_17)"/>
                <defs>
                <linearGradient id="paint0_linear_35_17" x1="47.9758" y1="36" x2="143.976" y2="156" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A3FF"/>
                <stop offset="0.703125" stopColor="#6C07FF"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            }
            <div className="markdown">
              <Markdown>
              {message.text}
              </Markdown>
            </div>
            
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={inputText}
          onChange={handleInputChange}
          onKeyDownCapture={e => { if (e.code==="Enter") handleSendMessage()} } 
        />
        <button className="send-button" onClick={handleSendMessage}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#c5c8c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BotScreen;

