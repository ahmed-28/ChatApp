const users = [];

export const addUser = ({id,name,room}) => {
    const isThere = users.find((user) => user.name===name && user.room===room);

    if(isThere){
        return {
            error:"username taken"
        };
    }

    const user = {id,name,room};
    users.push(user);
    return {user};
};

export const removeUser = (id) => {
    const index = users.findIndex((user) => user.id===id);

    if(index !== -1){
        return users.splice(index,1)[0];
    }
};

export const getUser = (id) => {
    const user = users.find((user) => user.id === id);
    return user;
};

export const getUsersInRoom = (room) => {
    const roomUsers = users.filter((user)=>user.room === room);
    return roomUsers;
};
