/* Переключение темы */

let lightThemeButton = document.querySelector(".theme-button-light");
let darkThemeButton = document.querySelector(".theme-button-dark");

lightThemeButton.onclick = function () {
    lightThemeButton.classList.add("active");
    darkThemeButton.classList.remove("active");
    document.body.classList.remove("dark");
}

darkThemeButton.onclick = function () {
    document.body.classList.add("dark");
    darkThemeButton.classList.add("active");
    lightThemeButton.classList.remove("active");
}

/* Переключение шрифтов */

let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');

sansSerifFontButton.onclick = function () {
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
    document.body.classList.remove('serif');
}

serifFontButton.onclick = function () {
    serifFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active');
    document.body.classList.add('serif');
}

/* Переключение режима содержания */

let blogArticles = document.querySelectorAll('.blog-article');

for (let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function (evt) {
        blogArticle.classList.remove('short');
    }
}


/* Переключение вида карточек */

let gridVievCardButton = document.querySelector('.card-view-button-grid');
let listVievCardButton = document.querySelector('.card-view-button-list');

let cardsList = document.querySelector('.cards');

gridVievCardButton.onclick = function () {
    cardsList.classList.remove('list');
    gridVievCardButton.classList.add('active');
    lightThemeButton.classList.remove('active');
}

listVievCardButton.onclick = function () {
    cardsList.classList.add('list');
    listVievCardButton.classList.add('active');
    gridVievCardButton.classList.remove('active');
}

/* Переключение изображений */
let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for ( let preview of previews) {
    preview.onclick = function (evt) {
    evt.preventDefault();

    let currentActive = document.querySelector('.preview-list .active-item');
    currentActive.classList.remove('active-item');
    preview.classList.add('active-item');

    activePhoto.src = preview.href;
    }
}