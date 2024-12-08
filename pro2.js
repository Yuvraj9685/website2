/* script.js */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    getAll() {
        const tasks = [];
        let current = this.head;
        while (current) {
            tasks.push(current.data);
            current = current.next;
        }
        return tasks;
    }
}

const taskList = new LinkedList();

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task) {
        taskList.add(task);
        taskInput.value = '';
        renderTasks();
    }
}

function removeTask(task) {
    taskList.remove(task);
    renderTasks();
}

function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';
    const tasks = taskList.getAll();
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(task);
        li.appendChild(removeButton);
        taskListElement.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', renderTasks);
