import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import TopNav from './TopNav';
import InputMessage from './InputMessage';

let socket;
const API_URL = "localhost:5000";

const Chat = ({location}) => {
    let [name,setName] = useState('');
    let [room,setRoom] = useState('');
    let [message,setMessage] = useState('');
    let [messages,setMessages] = useState([]);


    useEffect(() => {
        const {name,room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);
        
        socket = io(API_URL);
        socket.emit('join',{name,room});

        console.log(socket);

        return () => {
            socket.disconnect();
            socket.off();
        }

    },[location.search]);

    useEffect(() => {
        socket.on('message',(message) => {
            setMessages([...messages,message]);
        });
    },[messages]);

    const sendMessage = (ev) => {
        ev.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''));
        }
    };

    console.log(message,messages);
    
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-green-500">
            <h1 className="pb-4 font-black text-2xl">Chat Room</h1>
            <div class="flex flex-col w-full max-w-lg rounded-sm">
                <TopNav room={room}/>
                
                <main class="bg-green-600 flex items-center flex-grow justify-center text-white">Main</main>
                <InputMessage message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );
}

export default Chat;