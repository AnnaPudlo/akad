//находим нужный список по названию класса и заносим его в переменную
var $bread = document.querySelector('.ba-breadcrumbs');

/* способ 1 
//клонируем первый элемент списка со всем его содержимым и добавляем в список
$bread.appendChild(($bread.firstElementChild).cloneNode(true)); 
//в добавленном элементе находим ссылку и меняем ее текст на необходимый
($bread.lastElementChild).querySelector('.ba-breadcrumbs__link').textContent="company";
*/

/* способ 2. попроще. */
let $breadcrumbsItem = document.createElement('li'); //создаем элемент списка
$breadcrumbsItem.setAttribute('class', 'ba-breadcrumbs__item'); //добавляем класс
let $breadcrumbsLink = document.createElement('a'); //создаем ссылку
$breadcrumbsLink.setAttribute('href', '#'); //добавляем аттрибутов
$breadcrumbsLink.setAttribute('class', 'ba-breadcrumbs__link'); //добавляем класс
$breadcrumbsLink.innerText = 'company'; //добавляем ссылке текст
$breadcrumbsItem.appendChild($breadcrumbsLink); //засовываем ссылку в элемент списка
$bread.appendChild($breadcrumbsItem); //засовываем элемент списка в список


//получаем список всех заголовков бенефитов
var $redBenefit = document.querySelectorAll('.ba-benefit__title');
//с помощью цикла меняем цвет первых трех заголовков на красный
for (let i=0;i<3;i++) {
    $redBenefit[i].style.color='red';
}

//получаем список изображений команды
var $memberImages = document.querySelectorAll('.ba-team-member__img');
//c помощью цикла изменяем значение аттрибута src на что-то короткое и невнятное
for (let i=0;i<$memberImages.length;i++) {
    $memberImages[i].setAttribute('src', 'http://www.spletnik.ru/img/2019/04/nadja/20190415-keanu-5.jpg');
}