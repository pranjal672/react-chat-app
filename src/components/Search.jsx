const Search = () => {
    return (
        <div className="search">
            <div className="search-form">
                <input type="text" placeholder="Find a user" />
            </div>
            <div className="user-chat">
                <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profilepic" />
                <div className="user-chat-info">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search