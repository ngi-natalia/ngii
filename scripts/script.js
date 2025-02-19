'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

});
/*Алгоритм:
* 
*1.Начало
*2. Ожидание клика на карточку товара
*3. Проверка условия: было нажатие на карточку товара
*   3.1 Да: Карточка открывается на всю страницу
*       3.1.1 Проверка условия: было ли еще нажатие
             3.1.1.1 Да: Нажать на картинку для закрытия
             3.1.1.2 Нет: конец
    3.2 Нет: Конец
4. Конец
*
*Блок-схема: /images/schema.pdf
*/
const images =document.getElementsByClassName("product-image");
images[0].addEventListener("click", (image) => {
    console.log('Клик отработал корректно');
    /*image.style="transform: scale(2)"; */

});