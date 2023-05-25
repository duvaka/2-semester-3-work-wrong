//Слайдер
const dotContainer = document.querySelector('.slider__dots');
const dots = dotContainer.querySelectorAll('.slider__dot');
const slider = document.querySelector('.slider__slider');
const imgArr = [
    '/img/Banner_1.png',
    '/img/Banner_2.png',
    '/img/Banner_3.png',
    '/img/Banner_4.png'
];

let currentSlide = 0;
dots[currentSlide].classList.add('active');

function showSlide(n) {
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + imgArr.length) % imgArr.length;
    dots[currentSlide].classList.add('active');
    slider.innerHTML = `<img class="slider__img" src="${imgArr[currentSlide]}" alt="">`;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});



//Галерея
// Получаем все необходимые элементы
const tabs = document.querySelectorAll('.portfolio__tab');
const designFilters = document.getElementById('design-websites-filters');
const logosFilters = document.getElementById('logos-filters');
const designWebsitesWorks = document.getElementById('design-websites-internet-gallery');
const designCorporateWorks = document.getElementById('design-websites-corporate-gallery');
const logosSportsWorks = document.getElementById('logos-sports-gallery');
const logosEntertainmentWorks = document.getElementById('logos-entertainment-gallery');

// Добавляем обработчик события клика на каждую вкладку
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Удаляем активный класс у всех вкладок
    tabs.forEach(tab => tab.classList.remove('active'));
    // Скрываем все фильтры
    designFilters.style.display = 'none';
    logosFilters.style.display = 'none';

    // Добавляем активный класс текущей вкладке
    tab.classList.add('active');
    // Получаем атрибут data-category текущей вкладки
    const tabCategory = tab.getAttribute('data-category');

    // Проверяем выбранный таб и отображаем соответствующие фильтры и работы
    if (tabCategory === 'design-websites') {
      designFilters.style.display = 'flex';
      designWebsitesWorks.style.display = 'grid';
      designCorporateWorks.style.display = 'none';
      logosSportsWorks.style.display = 'none';
      logosEntertainmentWorks.style.display = 'none';
    } else if (tabCategory === 'logos') {
      logosFilters.style.display = 'flex';
      designWebsitesWorks.style.display = 'none';
      designCorporateWorks.style.display = 'none';
      logosSportsWorks.style.display = 'grid';
      logosEntertainmentWorks.style.display = 'none';
    }
  });
});

// Получаем все необходимые элементы фильтров
const designFiltersButtons = document.querySelectorAll('#design-websites-filters .portfolio__filter');
const logosFiltersButtons = document.querySelectorAll('#logos-filters .portfolio__filter');

// Добавляем обработчик события клика на каждый фильтр
designFiltersButtons.forEach(filter => {
  filter.addEventListener('click', () => {
    // Удаляем активный класс у всех фильтров
    designFiltersButtons.forEach(filter => filter.classList.remove('active'));

    // Добавляем активный класс текущему фильтру
    filter.classList.add('active');
    // Получаем атрибут data-category текущего фильтра
    const filterCategory = filter.getAttribute('data-category');

    // Проверяем выбранный фильтр и отображаем соответствующие блоки работ
    if (filterCategory === 'internet') {
      // Показываем блок с интернет-работами
      designWebsitesWorks.style.display = 'grid';
      // Скрываем блок с корпоративными работами
      designCorporateWorks.style.display = 'none';
    } else {
      // Скрываем блок с интернет-работами
      designWebsitesWorks.style.display = 'none';
      // Показываем блок с корпоративными работами
      designCorporateWorks.style.display = 'grid';
    }
  });
});

logosFiltersButtons.forEach(filter => {
  filter.addEventListener('click', () => {
    // Удаляем активный класс у всех фильтров
    logosFiltersButtons.forEach(filter => filter.classList.remove('active'));

    // Добавляем активный класс текущему фильтру
    filter.classList.add('active');
    // Получаем атрибут data-category текущего фильтра
    const filterCategory = filter.getAttribute('data-category');

    // Проверяем выбранный фильтр и отображаем соответствующие блоки работ
    if (filterCategory === 'sports') {
        // Показываем блок с интернет-работами
        logosSportsWorks.style.display = 'grid';
        // Скрываем блок с корпоративными работами
        logosEntertainmentWorks.style.display = 'none';
      } else {
        // Скрываем блок с интернет-работами
        logosSportsWorks.style.display = 'none';
        // Показываем блок с корпоративными работами
        logosEntertainmentWorks.style.display = 'grid';
      }
  });
});



//Акордион
const acordionTitles = document.querySelectorAll('.acordion__title');

acordionTitles.forEach(acordionTitle => {
  const arrowDown = acordionTitle.querySelector('.acordion__img img:first-child');
  const arrowUp = acordionTitle.querySelector('.acordion__img img:last-child');
  const h4Element = acordionTitle.nextElementSibling;

  acordionTitle.addEventListener('click', () => {
    if (arrowDown.style.display === 'none') {
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'none';
      h4Element.style.display = 'none';
    } else {
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'block';
      h4Element.style.display = 'block';
    }
  });
});



//Модальное окно
document.getElementById('open-modal-btn').addEventListener('click',function(){
  document.getElementById('brif-modal').classList.add('open')
})

document.getElementById('close-modal-btn').addEventListener('click',function(){
  document.getElementById('brif-modal').classList.remove('open')
})



//Бургер меню
document.getElementById('burger').addEventListener('click',function(){
  document.getElementById('nav').classList.toggle('active')
  document.getElementById('burger').classList.toggle('active')
})