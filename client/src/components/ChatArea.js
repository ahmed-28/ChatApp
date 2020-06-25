import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const ChatArea = ({messages,name}) => {

    return (
    <div className="bg-gray-600 flex items-center flex-grow justify-center text-white" style={{height:"500px"}}>
    <ScrollToBottom className="w-full h-full">
        <div className="flex flex-col">
            {messages.map((message,i) => <div key={i}><Message message={message} name={name}/></div>)}
        </div>
    </ScrollToBottom>
    </div>
    );
};

export default ChatArea;