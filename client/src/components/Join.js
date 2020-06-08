import React,{useState} from 'react';
import {Link} from 'react-router-dom';



const Join = () => {
    let [name,setName] = useState('');
    let [room,setRoom] = useState('');
    return( 
        <div className="h-screen w-full flex flex-col justify-center items-center bg-green-500">
        <h1 className="pb-4 font-black text-2xl">Join Room</h1>
        <div className="w-full max-w-md bg-gray-800" >
          <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
            <div className="pb-4">
              <label htmlFor="email" className="text-sm block font-bold  pb-2">Name</label>
              <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Name" onChange={ev => setName(ev.target.value)}/>
            </div>
            <div className="pb-4">
              <label htmlFor="password" className="text-sm block font-bold pb-2">Room</label>
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Room" onChange={ev => setRoom(ev.target.value)} />
            </div>
            <div>
            <Link onClick={ev => (!name || !room) ? ev.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}> 
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-full" type="button">Join</button>
            </Link>
            </div>
          </form>
        </div>
      </div>  
    );
}

export default Join;