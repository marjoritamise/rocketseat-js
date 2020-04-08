var listElement = document.querySelector('#app ul'),
    inputElement = document.querySelector('#app input'),
    buttonElement = document.querySelector('#app button');

var toDos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderToDos() {

    listElement.innerHTML = '';
    
    for (toDo of toDos) {
        var toDoElement = document.createElement('li'),
            toDoText = document.createTextNode(toDo);

        toDoElement.appendChild(toDoText);
        listElement.appendChild(toDoElement);
    }
}

function addToDo() {
    let toDoText = inputElement.value;
    toDos.push(toDoText)
    inputElement.value = '';
    renderToDos();
}

buttonElement.onclick = addToDo;
renderToDos();