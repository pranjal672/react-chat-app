import { createContext, useContext, useReducer } from "react";
import AuthContext from "./AuthContext";

const ChatContext = createContext(null)

export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext)

    const INITIAL_STATE = {
        chatId: null,
        user: {}
    }

    const chatReducer = (state, action) => {
        if (action.type === "CHANGE_USER") {
            return {
                user: action.payload,
                chatId: currentUser.uid > action.payload.uid ? currentUser.uid + action.payload.uid : action.payload.uid + currentUser.uid
            }
        }
        return state
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider >
    )
}

export default ChatContext