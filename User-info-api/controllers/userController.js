let users = [
    {id:1 , name:"Ali"},
    {id:2 , name:"Ahmad"},

];


// Get all users
const getAllUsers = async (req , res)=>{
    try {
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Add user

const addUser = async (req , res)=>{
    try{
        const { name } = req.body;
        const newUser = {
            id: users.length + 1,
            name
        };
        users.push(newUser);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = {getAllUsers , addUser};