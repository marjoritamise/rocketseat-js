var listElement = document.querySelector('#app ul'),
    inputElement = document.querySelector('#app input'),
    buttonElement = document.querySelector('#app button'),
    toDos = JSON.parse(localStorage.getItem('listToDos')) || [];

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
    saveToStorage();
}

function deletToDo(position) {
    toDos.splice(position, 1);
    renderToDos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('listToDos', JSON.stringify(toDos));
}

buttonElement.onclick = addToDo;
renderToDos();