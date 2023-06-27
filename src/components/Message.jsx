import { useContext, useRef, useEffect } from "react"
import AuthContext from "../context/AuthContext"
import ChatContext from "../context/ChatContext"

const Message = ({ message }) => {
    const divRef = useRef(null)
    const { currentUser } = useContext(AuthContext)
    const { data } = useContext(ChatContext)

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" })
    }, [message])

    return (
        <div ref={divRef} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
            <div className="message-info">
                <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="profilepic" />
                <span>just now</span>
            </div>
            <div className="message-content">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt="messagepic" />}
            </div>
        </div>
    )
}

export default Message