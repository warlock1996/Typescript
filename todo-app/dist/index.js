"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Do Homework", true),
    new todoItem_1.TodoItem(2, "Play Football"),
    new todoItem_1.TodoItem(3, "Rest a while"),
];
let collection = new jsonTodoCollection_1.JsonTodoCollection("Arslan", todos);
let showHide = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List ` +
        `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showHide).forEach((item) => item.printDetails());
}
function promptAdd() {
    console.clear();
    inquirer
        .prompt({
        type: "input",
        name: "add",
        message: "Enter task:",
    })
        .then((answers) => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer
        .prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark tasks as complete",
        choices: collection.getTodoItems(showHide).map((item) => ({
            name: item.task,
            value: item.id,
            checked: item.complete,
        })),
    })
        .then((answers) => {
        let completed = answers["complete"];
        console.log(completed);
        collection.getTodoItems(true).forEach((item) => {
            collection.markComplete(item.id, completed.find((id) => id === item.id) !== undefined);
        });
        promptUser();
    });
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add";
    Commands["Complete"] = "Complete";
    Commands["Purge"] = "Purge";
    Commands["Toggle"] = "Toggle";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer
        .prompt({
        type: "list",
        name: "command",
        message: "Choose Option",
        choices: Object.values(Commands),
    })
        .then((answers) => {
        switch (answers.command) {
            case Commands.Toggle:
                showHide = !showHide;
                promptUser();
                break;
            case Commands.Quit:
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
