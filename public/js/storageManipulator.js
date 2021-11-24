const inputField = document.querySelector('#new-todo');
const localstorage = localStorage;


inputField.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        //const data = getDatabase();
    }
});

async function getDatabase() {
    try {
        const response = await fetch('http://localhost:3000/get-data');
        const data = await response.json();
        populateLocalStorage(data);
    } catch (err) {
        console.log(err);
    }
    
}

function populateLocalStorage(data) {
    localstorage.clear();
    let tmp = [];
    if (data) {
        for (let key in data) {
            tmp.push(JSON.stringify(data[key]));
            localstorage.setItem('todo', JSON.stringify(data[key]));
        }
    }
}