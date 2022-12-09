import react from "react";
import "./chat.css";
import useChatHook from "./chatHook";
import logo from "./alychatlogo.png";

const MyChat = (props) => {
    const { roomId } = props.match.params;
    const { messages, sendMessage } = useChatHook(roomId);
    const [newMessage, setNewMessage] = react.useState("");
  
    const handleNewMessageChange = (event) => {
      setNewMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      sendMessage(newMessage);
      setNewMessage("");
    };
  
    return (
        <div className="containers">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="container">
                <main>
                    <header>
                        <div>
                            <img src={logo} />
                        </div>
                    </header>
                
                    <ol className="chat">
                        {messages.map((message, i) => (
                        <li
                            key={i}
                            className={`you ${
                            message.ownedByCurrentUser ? "my-message" : "received-message"
                            }`}
                        >
                            {message.body}
                        </li>
                        ))}
                    </ol>
                    <footer>
                        <textarea placeholder="Type your message"></textarea>
                        <a onClick={handleSendMessage} href="#">Send</a>
                    </footer>
                </main>
            </div>
    </div>
    );
  };
  export default MyChat;