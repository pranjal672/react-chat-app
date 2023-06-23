import { FaVideo, FaUserPlus, FaEllipsisH } from "react-icons/fa"
import Messages from "./Messages"
import Input from "./Input"

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat-info">
                <span>Jane</span>
                <div className="chat-icons">
                    <FaVideo />
                    <FaUserPlus />
                    <FaEllipsisH />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat