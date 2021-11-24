//const { request } = require("http");

const inputField = document.querySelector('#new-todo');

inputField.addEventListener('keydown', (e) => {
    console.log('something happened');
    if (e.code === 'Enter') {
        console.log('entered valie: ' + e.target.value);
    }
});
