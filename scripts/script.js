'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

});
/*Алгоритм:
* 
*1.Начало
*2. Ожидание клика на карточку товара
*3. Проверка условия: было нажатие на карточку товара
*   3.1 Да: Карточка увеличивается в 2 раза
*       3.1.1 Проверка условия: было ли еще нажатие
             3.1.1.1 Да: Нажать на картинку для закрытия
             3.1.1.2 Нет: конец
    3.2 Нет: Конец
4. Конец
*
*Блок-схема: /images/schema.pdf
*/
const images = document.querySelectorAll(".product-image");

// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", (image) => {
//         console.log('Клик отработал корректно');
//         /*image.style="transform: scale(2)"; */
//         const size = images[i].getAttribute("data-size")
//         if (size >= 2) {
//             images[i].style.setProperty('transform', 'scale(1)')
//             images[i].setAttribute("data-size", 1)
//         }
//         else {
//             images[i].style.setProperty('transform', 'scale(2)')
//             images[i].setAttribute("data-size", 2)
//         }

//     })
// }

images.forEach((item) => {
    item.addEventListener("click", () => {
        // console.log('Клик отработал корректно');
        const size = item.getAttribute("data-size")
                if (size >= 2) {
                    item.style.setProperty('transform', 'scale(1)')
                    item.setAttribute("data-size", 1)
                }
                else {
                    item.style.setProperty('transform', 'scale(2)')
                    item.setAttribute("data-size", 2)
                }
    })
});

const cart_counter = document.querySelector(".cart-counter");
     console.log(cart_counter);
     if (cart_counter) {
     console.log('Константа cart_counter существует');

     const cartbutton = document.querySelectorAll('.cartbutton');

     let count = parseInt(cart_counter.textContent); // Начальное значение счетчика с приведением строки к числу
     console.log(cart_counter.textContent);

     // Обработчик клика на иконку
     cartbutton.forEach((item) => {
        item.addEventListener("click", () => {
        count += 1; // Увеличиваем счетчик
        cart_counter.innerHTML = count;
        cart_counter.textContent = count; // Обновляем счетчик
     });
 })
};
