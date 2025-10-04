console.log('js-projects');

const search = document.querySelector('.search-widget');
const searchInput = document.querySelector('.input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
});