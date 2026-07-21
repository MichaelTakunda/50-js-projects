const button = document.getElementById('button')
const toast = document.getElementById('toasts')

const messages = [
    'Hello',
    'How are you?',
    'How is your day?',
    'How is school',
    'Well, it was nice to meet you'

]

const types = [
    'info', 'success', 'error'
]

button.addEventListener('click',() => createNotification())

function createNotification( message = null, type = null){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());

    notif.innerText =message ? message : getRandomMessage();

    toast.appendChild(notif);

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType(){
    return types[Math.floor(Math.random() * types.length)];
}