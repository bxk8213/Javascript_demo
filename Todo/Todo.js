
let list = [];


// let choice = prompt("What would you like to do? ");

let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    taskList(inp.value);
});

function taskList(choice)
{    
    switch(choice)
    {
        case "add":
        case 'a':
            let newTodo = prompt("Add a todo? ");
            list.push(newTodo);
            console.log("Successfully added task!");
            break;
        
        case "remove":
        case 'r':
            let removeTask = prompt("Which task to remove? ");
            let i;
            for(i = removeTask - 1; i < list.length - 1; i++)
            {
                list[i] = list[i + 1];
            }
            list[i] = removeTask;
            let taskRemoved = list.pop();
            console.log(`${taskRemoved} is removed from list.`);
            break;
        
        case "update":
        case 'u':
            let updateTask = prompt("Which task you want to update");
            updateTask -= 1;
            let previousTask = list[updateTask];
            list[updateTask] = prompt("Modify your task");
            console.log(`${previousTask} task is modified.`);
            break;

        case "list":
        case 'l':
            let count = 1;
            for(task of list)
                {
                    console.log(`${count++}.${task}`);
                }
            break;
    }
            
}


