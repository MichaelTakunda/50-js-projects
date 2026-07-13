console.log('js-projects');

const numbers = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.getElementById('replay');

runAnimation();

function resetDOM(){
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');

    numbers.forEach((number) => {
        number.classList.value = '';
    });

    numbers[0].classList.add('active');
}

function runAnimation() {
    numbers.forEach((number, idx) =>{
        const nextToLast = numbers.length - 1;

        number.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== nextToLast){
                number.classList.remove('active');
                number.classList.add('inactive');
            }else if(e.animationName === 'goOut' && number.nextElementSibling){
                number.nextElementSibling.classList.add('active');
            }else{
                counter.classList.add('hide');
                finalMessage.classList.add('show');
            }
        })
    })
};

replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
})