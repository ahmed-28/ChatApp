import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import TopNav from './TopNav';

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
            socket.emit('disconnect');
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
        <div className="h-screen w-full flex flex-col justiy-center items-center bg-green-500">
            <h1>Chat page</h1>
            <div class="flex flex-col bg-purple-500" style={{width:"550px",height:"550px"}}>
                <header class="p-4 bg-red-100 text-center text-white font-bold">Header</header>
                <main class="bg-green-600 flex items-center flex-grow justify-center text-white">Main</main>
                <footer class="p-4 bg-red-500 text-center text-white font-bold">Footer</footer>
            </div>
        </div>
    );
}

export default Chat;