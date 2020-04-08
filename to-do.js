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
            toDoText = document.createTextNode(toDo),
            linkElement = document.createElement('a'),
            linkText = document.createTextNode('Delet'),
            position = toDos.indexOf(toDo);

        linkElement.appendChild(linkText);
        toDoElement.append(toDoText, linkElement);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', `deletToDo(${position})`);
        listElement.appendChild(toDoElement);
    }
}

function addToDo() {
    let toDoText = inputElement.value;
    toDos.push(toDoText)
    inputElement.value = '';
    renderToDos();
}

function deletToDo(position) {
    toDos.splice(position, 1);
    renderToDos();
}

buttonElement.onclick = addToDo;
renderToDos();