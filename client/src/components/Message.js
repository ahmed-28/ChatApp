import React from 'react';

const Message = ({message,name}) => {
    let curUser = false;

    if(message.user === name) 
        curUser = true;
    
    return(
        curUser ? (
            <div className="float-right p-3 m-2 w-auto h-auto max-w-md bg-blue-500 rounded-lg flex flex-col">
                <p className="font-bold text-opacity-50">{message.user}</p>
                <div>{message.text}</div>
            </div>
        ) : (
            <div className="p-3 m-2 float-left w-auto h-auto max-w-md bg-green-500 rounded-lg flex flex-col">
                <p className="font-bold text-opacity-50">{message.user}</p>
                <div>{message.text}</div>
            </div>
        )
    )
};

export default Message;