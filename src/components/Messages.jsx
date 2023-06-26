import { useContext, useEffect, useState } from "react"
import Message from "./Message"
import ChatContext from "../context/ChatContext"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../Firebase"

const Messages = () => {
    const [messages, setMessages] = useState([])
    const { data } = useContext(ChatContext)

    useEffect(() => {
        const getMessages = () => {
            const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
                doc.exists() && setMessages(doc.data().messages)
            });

            return () => {
                unsub()
            }
        }

        data.chatId && getMessages()
    }, [data.chatId])

    return (
        <div className="messages">
            {messages.map(message => <Message message={message} key={message.id} />)}
        </div>
    )
}

export default Messages