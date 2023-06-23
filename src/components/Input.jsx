import { FaFileImage, FaPaperclip } from "react-icons/fa"

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type something..." />
            <div className="send">
                <FaPaperclip />
                <input type="file" id="file" style={{ display: "none" }} />
                <label htmlFor="file">
                    <FaFileImage />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input