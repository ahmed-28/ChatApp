import React from 'react';

const Message = ({message,name}) => {
    let curUser = false;

    if(message.user === name) 
        curUser = true;
    
    return(
        curUser ? (
            <div className="absolute inset-y-0 right-0 border-2 border-red-500">
                u are user
            </div>
        ) : (
            <div className="absolute inset-y-0 left-0 border-2 border-red-500">
                a
            </div>
        )
    )
};

export default Message;