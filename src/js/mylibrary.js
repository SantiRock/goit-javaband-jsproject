import '../sass/index.scss';
import renderFilms from './librarycard';
//import pagination from './pagination';
import { watchedLocalStorage, queueLocalStorage, getLocalq, getLocalw } from "./localstorage";

// DOM -----
const watched = document.querySelector('.watched');
const queue = document.querySelector('.queue');
const films = document.querySelector('.films');
const msn = document.querySelector('.msn');
const pages = document.querySelector('.pages');
const screen = document.querySelector('.screen');
const itemsPerPage = 12;
let currentPage = 1;

console.log(localStorage);
getLocalq();
getLocalw();

//console.log(watchedLocalStorage.watchedId);
let queueIds = queueLocalStorage.queueId;
let watchedIds = watchedLocalStorage.watchedId;


if (localStorage.getItem('queue') === null) {
    queueIds = [];
} else {
 queueIds = JSON.parse(localStorage.getItem('queue')).queueId;
};

if (localStorage.getItem('watched') === null) {
    watchedIds = [];
} else {
 watchedIds = JSON.parse(localStorage.getItem('watched')).watchedId;
};





// Local Storage Manage  ---

const apiKey = '0a3a4e00d84de20a8f1b6dfc8a7cdfd5';


function getLocalStorage(arr, page) {
    if (arr.length === 0 ) {
        msn.textContent = 'No movies have been added to Watched list yet';
    } else {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToDisplay = arr.slice(startIndex, endIndex);
        films.innerHTML = '';
        itemsToDisplay.forEach(movie_id => {
            screen.style.display = 'flex';
            fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`)
            .then(response => response.json())
            .then(film => renderFilms(film))
            .catch(error => console.error(error))
            .finally(() => screen.style.display = 'none')
        })
        pagination(watchedIds, totalPagesW, currentPage);       
    }
}

//Pages
const totalPagesW = Math.ceil(watchedIds.length / itemsPerPage);
const totalPagesQ = Math.ceil(queueIds.length / itemsPerPage);

// Pagination

const pagesToShow = 5;

const pagination = (arr, totalPages, currentPage) => {
    pages.innerHTML = '';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '←';
    //prevBtn.innerHTML = markup;
    prevBtn.classList.add('pagebtn');
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        currentPage--;
        getLocalStorage(arr, currentPage);
        pagination(arr, totalPages, currentPage);
    });
    pages.append(prevBtn);

    const first = document.createElement('button');
    first.textContent = '1';
    first.classList.add('page');
    first.disabled = currentPage === 1;
    first.addEventListener('click', () => {
        currentPage = 1;
        getLocalStorage(arr, currentPage);
        pagination(arr, totalPages, currentPage);
    });
    pages.append(first);

    const dots = document.createElement('div');
    dots.textContent = '...';
    dots.classList.add('dots');
    pages.append(dots);

    const st1 = Math.max(currentPage - Math.floor(pagesToShow/2), 1);
    const st2 = Math.max(currentPage - pagesToShow + 1, 1);
    const st3 = Math.max(currentPage - pagesToShow + 2, 1);

    let startPage;
    currentPage === totalPages ? startPage = st2 
    : currentPage === totalPages - 1 ? startPage = st3 : startPage = st1;
    
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);
    for(let i = startPage; i <= endPage; i++) {
      const pageButton = document.createElement('button');
      pageButton.classList.add('page');
      pageButton.textContent = i;
      pageButton.disabled = i === currentPage;

      i === currentPage ? pageButton.classList.add('activePage') : pageButton.classList.remove('activePage');

      pageButton.addEventListener('click', () => {
        currentPage = i;
        getLocalStorage(arr, currentPage);
        pagination(arr, totalPages, currentPage);
      });
      pages.append(pageButton);
    };

    const dots1 = document.createElement('div');
    dots1.textContent = '...';
    dots1.classList.add('dots');
    pages.append(dots1);

    const last = document.createElement('button');
    last.textContent = totalPages;
    last.classList.add('page');
    last.disabled = currentPage === totalPages
    last.addEventListener('click', () => {
        currentPage = totalPages;
        getLocalStorage(arr, currentPage);
        pagination(arr, totalPages, currentPage);
    });
    pages.append(last);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '→';
    nextBtn.classList.add('pagebtn');
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        currentPage++;
        getLocalStorage(arr, currentPage);
        pagination(arr, totalPages, currentPage);
    });
    pages.append(nextBtn);
}


// Event Listeners ---

watched.addEventListener('click', (event) => {
    event.preventDefault();
    watched.classList.add('selected');
    queue.classList.remove('selected');
    if (watchedIds.length === 0) {
        films.innerHTML = '';
        msn.textContent = 'No movies have been added to Watched list yet';
        pages.innerHTML = '';
    } else {
        getLocalStorage(watchedIds, currentPage, 'Watched');
        pagination(watchedIds, totalPagesW, currentPage);  
    }
});


queue.addEventListener('click', (event) => {
    event.preventDefault();
    queue.classList.add('selected');
    watched.classList.remove('selected');
    if (queueIds.length === 0) {
        films.innerHTML = '';
        msn.textContent = 'No movies have been added to Queue list yet';
        pages.innerHTML = '';
    } else {
        getLocalStorage(queueIds, currentPage);
        pagination(queueIds, totalPagesQ, currentPage);
    }
});


// Render by default

pages.innerHTML = '';
getLocalStorage(watchedIds, currentPage);


// Tests
/*
 const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
 fetch(url)
 .then(response => response.json())
 .then(data => getID(data.results))
 .catch(error => console.error(error));

function getID(data) {
    data.forEach(film => console.log(film.id))
}
*/

