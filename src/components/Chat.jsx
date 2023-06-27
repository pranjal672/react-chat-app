import { FaVideo, FaUserPlus, FaEllipsisH } from "react-icons/fa"
import Messages from "./Messages"
import Input from "./Input"
import { useContext } from "react"
import ChatContext from "../context/ChatContext"

const Chat = () => {
    const { data } = useContext(ChatContext)

    return (
        <div className="chat">
            {Object.keys(data.user).length > 0 ?
                <>
                    <div className="chat-info">
                        <span>{data.user?.displayName}</span>
                        <div className="chat-icons">
                            <FaVideo />
                            <FaUserPlus />
                            <FaEllipsisH />
                        </div>
                    </div>
                    <Messages />
                    <Input />
                </>
                : <div style={{
                    backgroundColor: "white",
                    color: "grey",
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "2.5rem",
                    padding: "1rem"
                }}><span>Select a user to start chat!</span></div>}
        </div>
    )
}

export default Chat