#!/usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalkAnimation from 'chalk-animation';
const sleep = () => new Promise((resolve) => setTimeout((resolve), 2000));
async function welcomeScreen() {
    let title = chalkAnimation.rainbow(figlet.textSync('TODO APP'));
    await sleep();
    title.stop();
}
await welcomeScreen();
let todoList = [];
while (true) {
    const input = await inquirer.prompt([
        {
            type: "list",
            name: "value",
            message: "select your option:",
            choices: ['add task', 'Exit']
        }
    ]);
    if (input.value == 'add task') {
        const task = await inquirer.prompt([
            {
                type: "string",
                name: 'todo',
                message: "enter your task:"
            },
        ]);
        todoList.push(task.todo);
    }
    else if (input.value == 'Exit') {
        break;
    }
}
console.log(todoList);
