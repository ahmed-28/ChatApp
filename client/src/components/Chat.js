import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = ({location}) => {
    let [name,setName] = useState('');
    let [room,setRoom] = useState('');

    const API_URL = "localhost:5000";
    useEffect(() => {
        const {name,room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);
        
        const socket = io(API_URL);

        console.log(socket);

    },[location.search]);
    
    return (
        <div>
            <h1>Chat page</h1> 
        </div>
    );
}

export default Chat;