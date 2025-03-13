function numCatch(a) {
    let inp = document.getElementById('input1');
    let value = a.value;

    switch (value) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '+':
        case '-':
        case '*':
        case '/':
        case '(':
        case ')':
        case '%':
            inp.value += value;
            break;
        default:
            break;
    }
}

function barobar() {
    let r = document.getElementById('input1');
    switch (true) {
        case /[+\-*/%()]/.test(r.value):
            try {
                r.value = eval(r.value);
            } catch (e) {
                r.value = 'Error';
            }
            break;
        default:
            break;
    }
}

function reset() {
    let res = document.getElementById('input1');
    res.value = '';
}
