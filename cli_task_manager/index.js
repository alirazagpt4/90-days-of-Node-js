const [,, command,...args] = process.argv;

const {addTasks , listTasks , deleteTasks} = require("./task");

switch(command){
    case "add":
        const task = args.join(" ");
        if(!task){
            console.error("Please provide a task description");
            process.exit(1);
        }

        addTasks(task);
        break;
    case "list":
        listTasks();
        break;
    case "delete":
        const index = parseInt(args[0]);
        if(isNaN(index)){
            console.error("Please provide a valid task index");
            process.exit(1);
        }
        deleteTasks(index);
        break;
    default:
        console.log(`
        🤖 Task Manager CLI
    
        Commands:
          node index.js add "Your Task"     ➤ Add a new task
          node index.js list                ➤ List all tasks
          node index.js delete <taskNo>     ➤ Delete a task by number
        `);
        break;
}