const background = document.getElementById('background');

// Create random characters that look like code
function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codeLine = '';
    for (let i = 0; i < 80; i++) {
        codeLine += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return codeLine;
}

// Create a stream of code that scrolls upwards
function createCodeStream() {
    for (let i = 0; i < 100; i++) {
        let code = generateCode();
        let div = document.createElement('div');
        div.textContent = code;
        background.appendChild(div);
    }
}

// Initialize the code stream
createCodeStream();
