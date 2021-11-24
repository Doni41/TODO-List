const todoStatsDiv = document.querySelector('#todo-stats');
const todoList = document.querySelector('#todo-list');
const htmlDeleteAnchor = document.querySelector('a');

todoStatsDiv.addEventListener('click', (e) => {
    if (e.target.matches('a')) {
        const nodes = todoList.childNodes;
        console.log(nodes);
        let items = [];
        for (let i = 0; i < todoList.childNodes.length; ++i) {
            if (!todoList.childNodes[i].childNodes[0].childNodes[1].checked) {
                let text = " ";
                items.push(text.concat(todoList.childNodes[i].childNodes[0].childNodes[3].innerHTML.toString()).concat(" "))
            } 
        }
        sendRequest(items);
    }
})

function sendRequest(items) {
    try {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", '/delete-items', true);
    
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.onreadystatechange = function() { 
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            }
        }
        //xhr.status(200);
        xhr.send(JSON.stringify(items));
    } catch (err) {
        console.log(err);
    }
}