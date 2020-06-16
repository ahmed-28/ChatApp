const InputMessage = ({setMessage,message,sendMessage}) => {

    return(
        <div className="grid grid-cols-3 gap-0">
            <input className="bg-gray-50 focus:border-blue-700 focus:ring col-span-2"
                value = {message}
                onChange = {(ev) => setMessage(ev.target.value)}    
                onKeyPress = {(ev) => ev.key == "Enter" ? sendMessage(ev) : null}
            />
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-full"
                onClick = {(ev) => sendMessage(ev) }
            >
                Send
            </button>
        </div>
    )
};

export default InputMessage;