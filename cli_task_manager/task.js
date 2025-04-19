const fs = require("node:fs");
const file = 'tasks.json';

function loadtasks(){
    const data = fs.readFileSync(file, 'utf8');
    // console.log(JSON.parse(data))
    return JSON.parse(data);
}

loadtasks();


function saveTasks(tasks){
    fs.writeFileSync(file , JSON.stringify(tasks , null,2));
}

// saveTasks()


function addTasks(task){
    const tasks = loadtasks();
    tasks.push(task);
    saveTasks(tasks);
    console.log(`Task added ${task}`);
}

// addTasks("task 1");


function listTasks(){
    const tasks = loadtasks();
    if(tasks.length === 0){
        console.log("No tasks found");
        return ;
    }

    console.log(" ... Tasks ...");

    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });

}

function deleteTasks(index){
    const tasks = loadtasks();
    
    if(index < 1 || index > tasks.length){
        console.log("Invalid task index");
        return;
    }

    const removed = tasks.splice(index -1 , 1);
    saveTasks(tasks);
    console.log(`Deleted Task : "${removed[0]}"`)
}


module.exports = {addTasks , deleteTasks , listTasks};

