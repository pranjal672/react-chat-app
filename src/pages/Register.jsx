import { FaFileImage } from "react-icons/fa"

const Register = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Chat App</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input type="file" id="file" style={{ display: "none" }} />
                    <label htmlFor="file">
                        <FaFileImage />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register