/**
 * Clase que representa una tarea.
 * @class
 */
class Task {
    /**
     * Crea una instancia de Task.
     * @constructor
     * @param {string} text - El texto de la tarea.
     */
    constructor(text) {
        /**
         * El texto de la tarea.
         * @member {string}
         */
        this.text = text;
        /**
         * Indica si la tarea está completada o no.
         * @member {boolean}
         */
        this.completed = false;
    }
}

/**
 * Clase que gestiona las tareas.
 * @class
 */
class TaskManager {
    /**
     * Crea una instancia de TaskManager.
     * @constructor
     */
    constructor() {
        /**
         * Lista de tareas.
         * @member {Task[]}
         */
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    /**
     * Añade una nueva tarea.
     * @param {string} text - El texto de la nueva tarea.
     */
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.updateLocalStorage();
    }

    /**
     * Elimina una tarea.
     * @param {number} index - El índice de la tarea a eliminar.
     */
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
    }

    /**
     * Cambia el estado de completado de una tarea.
     * @param {number} index - El índice de la tarea.
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
    }

    /**
     * Actualiza el almacenamiento local con las tareas.
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Obtiene todas las tareas.
     * @returns {Task[]} - Lista de tareas.
     */
    getTasks() {
        return this.tasks;
    }
}

/**
 * Instancia de TaskManager para gestionar tareas.
 * @type {TaskManager}
 */
const taskManager = new TaskManager();

/**
 * Función para añadir una nueva tarea.
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        taskManager.addTask(text);
        taskInput.value = '';
        renderTasks();
    }
}

/**
 * Función para eliminar una tarea.
 * @param {number} index - El índice de la tarea a eliminar.
 */
function deleteTask(index) {
    taskManager.removeTask(index);
    renderTasks();
}

/**
 * Función para representar visualmente las tareas.
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskManager.getTasks().forEach((task, index) => {
        const taskEl = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';
        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }

        // Botón para borrar tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Borrar';
        deleteBtn.onclick = () => deleteTask(index);
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('buttonB'); // Añadir clase buttonB

        taskEl.appendChild(taskText);
        taskEl.appendChild(deleteBtn);
        taskList.appendChild(taskEl);
    });
}

/**
 * Función para cambiar el estado de completado de una tarea.
 * @param {number} index - El índice de la tarea.
 */
function toggleTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index);
    renderTasks();
}

/**
 * Listener para el evento 'click' en el botón de añadir tarea.
 */
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Renderiza las tareas al cargar la página
renderTasks();
