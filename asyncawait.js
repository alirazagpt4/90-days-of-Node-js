async function getUsers(){

    try{

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log("User's Data ",data);
    }
    catch{
        console.log("Error fetching data");
    }


}

getUsers()