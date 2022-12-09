import react from "react";
import { Link } from "react-router-dom";
import "./joinchat.css";
import logo from "./alychatlogo.png";
import "./chat.css";


const JoinChat = () => {
  const [roomName, setRoomName] = react.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    // <div className="home-container">
    //   <input
    //     type="text"
    //     placeholder="Room"
    //     value={roomName}
    //     onChange={handleRoomNameChange}
    //     className="text-input-field"
    //   />
    //   <Link to={`/${roomName}`} className="enter-room-button">
    //     Add to Chat
    //   </Link>
      
    // </div>
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
                
                  
                    <footer>
                        <textarea
                         placeholder="Add Chat ID"
                         value={roomName}
                         onChange={handleRoomNameChange}>
                        </textarea>
                        {/* <a href="#">Send</a> */}
                        <Link to={`/${roomName}`} className="add">
                             Add to Chat
                         </Link>
                    </footer>
                </main>
            </div>
    </div>
  );
};

export default JoinChat;
