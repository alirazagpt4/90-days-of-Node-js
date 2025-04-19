import eventEmitter from "./eventEmitter";

const registerUser = (username , email) =>{
    console.log(`User ${username} Registers Successfully `);

    eventEmitter.emit("userRegistered" , {username , email});
}

export default registerUser;