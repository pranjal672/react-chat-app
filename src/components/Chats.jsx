import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import AuthContext from "../context/AuthContext";
import ChatContext from "../context/ChatContext";

const Chats = () => {
    const { currentUser } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)
    const [chats, setChats] = useState([])

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data())
            });

            return () => {
                unsub()
            }
        }

        currentUser.uid && getChats()
    }, [currentUser.uid])

    const handleSelect = (userInfo) => {
        dispatch({ type: "CHANGE_USER", payload: userInfo })
    }

    return (
        <div className="chats">
            {chats && Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map(chat => (
                <div className="user-chat" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                    <img src={chat[1].userInfo.photoURL} alt="profilepic" />
                    <div className="user-chat-info">
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chats