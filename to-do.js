let listElement = document.querySelector('#app ul'),
    inputElement = document.querySelector('#app input'),
    buttonElement = document.querySelector('#app button');

let toDos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderToDos() {
    for (toDo of toDos) {
        let toDoElement = document.createElement('li'),
            toDoText = document.createTextNode(toDo);

        toDoElement.appendChild(toDoText);
        listElement.appendChild(toDoElement)
    }
}

renderToDos()