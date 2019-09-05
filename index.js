'use strict';
//Восстановить порядок книг.
let collectRoot = document.querySelector('body');
let collect = document.querySelectorAll('.books'); //Create selector to collection, for transport elements.
let elem = document.querySelectorAll('.book'); // Create selector to elements, for transport
let adv = document.querySelector('.adv'); // Create selector to advertising
let elemUl = document.querySelectorAll('ul'); // Create selector to UL, tor transport inside il elements
let elemLi = document.querySelectorAll('li'); // Create selector to inside elements, tor transport inside li elements



collect[0].insertBefore(elem[0], elem[2]); // transport null and first elements.
collect[0].insertBefore(elem[2], elem[6]); // transport second and last elements.
collect[0].insertBefore(elem[3], elem[5]); // transport third and fourth elements.

collectRoot.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)'); //change background image.

document.querySelectorAll('h2')[2].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"\
target="_blank">Книга 3. this и Прототипы Объектов</a>'; //chage h2.

collectRoot.removeChild(adv); // This is a function to remove advertising.

//elemUl[1].insertBefore(elemLi[2], elemLi[10]);
elemUl[3].insertBefore(elemLi[2], elemLi[4]);
document.querySelectorAll('ul')[1].insertBefore(elemLi[2], elemLi[10]);


