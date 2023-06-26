import { useContext, useState } from "react";
import { doc, collection, getDoc, getDocs, query, setDoc, updateDoc, where, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";
import AuthContext from "../context/AuthContext";

const Search = () => {
    const [userName, setUserName] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const { currentUser } = useContext(AuthContext)

    const userRef = collection(db, "users")

    const handleSearch = async () => {
        const q = query(userRef, where("displayName", "==", userName));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });

        } catch (err) {
            setErr(true)
            console.log(err)
        }
    }

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch()
    }

    const handleSelect = async () => {
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
        // check if chats collection exists
        try {
            const res = await getDoc(doc(db, "chats", combinedId))

            if (!res.exists()) {
                // create new chats collection
                await setDoc(doc(db, "chats", combinedId), { messages: [] })

                // create user chats
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                })

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                })
            }


        } catch (err) {
            console.log(err)
        }

        setUser(null)
        setUserName("")
    }

    return (
        <div className="search">
            <div className="search-form">
                <input type="text" onKeyDown={handleKey} onChange={(e) => setUserName(e.target.value)} placeholder="Find a user" value={userName} />
            </div>
            {err && <span>User not found!</span>}
            {user && <div className="user-chat" onClick={handleSelect}>
                <img src={user.photoURL} alt="profilepic" />
                <div className="user-chat-info">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search