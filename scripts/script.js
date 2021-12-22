/*** TOGGLE NAVBAR SECTION! ***/
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});



/*** LOGIN SECTION! ***/
const modal = document.querySelector('#modal');
const openModal = document.querySelector('#open');
const closeModal = document.querySelector('.close');
const cancelModal = document.querySelector('.cancelbtn');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

cancelModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// window.addEventListener('click', (event) => {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// });



/*** FILTERED ARTICLE SECTION! ***/
filterSelection("all");

function filterSelection(c) {
    const cards = document.querySelectorAll(".column");
    if (c == "all") c = "";
    cards.forEach(card => {
        removeClass(card, "show");
        if (card.className.indexOf(c) > -1) addClass(card, "show");
    });
}

function addClass(element, name) {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    arr2.forEach(arr => {
        if (arr1.indexOf(arr) == -1) { element.className += " " + arr; }
    });
}

function removeClass(element, name) {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    arr2.forEach(arr => {
        if (arr1.indexOf(arr) > -1) {
            arr1.splice(arr1.indexOf(arr), 1);
        }
    });
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
const btns = document.getElementsByClassName('filter-btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('inherit');

        current[0].className = current[0].className.replace(' inherit', '');
        this.className += ' inherit';
    })
}



/*** COPYRIGHTS ***/
const copyrightElement = document.querySelector('.copyright');
const copyrightDate = new Date().getFullYear();

copyrightElement.innerHTML = `&copy; ${copyrightDate} Curado Medical Inc. All rights reserved.`;



/*** SCROLL-TO-TOP BUTTON ***/
const scrollBtn = document.querySelector('#scrollToTopBtn');
const rootPage = document.documentElement;

document.addEventListener('scroll', handleScroll);
scrollBtn.addEventListener('click', scrollToTop);

function handleScroll() {

    if (document.body.scrollTop > 50 || rootPage.scrollTop > 50) {
        scrollBtn.className = 'showScrollBtn';
    } else {
        scrollBtn.className = '';
    }
}

function scrollToTop() {
    rootPage.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
