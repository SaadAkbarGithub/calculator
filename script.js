let inputField = document.getElementById('demo');
let buttons = document.querySelectorAll('button');

let result = ' ';
let arr = Array.from(buttons);

inputField.addEventListener('input', (evt) => {
    result += evt.data;
})
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            result = eval(result);
            inputField.value = result
        }
        else if (e.target.innerHTML == 'AC') {
            result = ' ';
            inputField.value = result
        }
        else if (e.target.innerHTML == 'DEL') {
            result = result.substring(0, result.length - 1);
            inputField.value = result;
        }
        else {
            result += e.target.innerHTML;
            inputField.value = result;
        }
    })
})
