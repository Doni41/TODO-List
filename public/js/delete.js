const todoStatsDiv = document.querySelector('#todo-stats');
const todoList = document.querySelector('#todo-list');
const htmlDeleteAnchor = document.querySelector('a');

/*
htmlDeleteAnchor.addEventListener('click', () => {

})
*/

todoStatsDiv.addEventListener('click', (e) => {
    if (e.target.matches('a')) {
        const nodes = todoList.childNodes;
        console.log(nodes);
        let items = [];
        for (let i = 0; i < todoList.childNodes.length; ++i) {
            if (!todoList.childNodes[i].childNodes[0].childNodes[1].checked)
            items.push(todoList.childNodes[i].childNodes[0].childNodes[3].innerHTML)
        }

        /*
        async function sendRequest () {
            try {
                const rawResponse = await fetch('https://localhost:3000/delete-items', {
                    method: 'POST',
                    body: JSON.stringify(items),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                const content = await rawResponse.json();
                console.log('siker!');
                console.log(content);

            } catch (err) {
                console.log(err);
            }
        }
        */

        function sendRequest() {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", '/delete-items', true);

            //Send the proper header information along with the request
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function() { // Call a function when the state changes.
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    // Request finished. Do processing here.
                }
            }
            xhr.send(JSON.stringify(items));
        }

        sendRequest();
    }
})