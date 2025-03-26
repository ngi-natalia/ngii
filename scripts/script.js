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
const btButtonModal = document.querySelector(".bt");
const modalforms = document.querySelector(".dialog-forms");
console.log(btButtonModal);
console.log(modalforms);

if (btButtonModal && modalforms) {
btButtonModal.addEventListener("click", (event) => {
    event.preventDefault();
      modalforms.removeAttribute("hidden");
      modalforms.scrollIntoView({ behavior: 'smooth' }); 
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalforms) {
        modalforms.setAttribute("hidden", true);
    }
});
//Объявляем переменную closeModalButton и сохраняем в нее кнопку c классом application__button
const closeModalButton = document.querySelector(".application__close");
//Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
closeModalButton.addEventListener("click", () => {
// Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
    modalforms.setAttribute("hidden", true);
});
const formsButtonModal = document.querySelector(".forms");
const modalexit = document.querySelector(".exit");
console.log(formsButtonModal);
console.log(modalexit);



const exitButtonModal = document.querySelector(".exit");
const modalvxod = document.querySelector(".dialog-vxod");
console.log(exitButtonModal);
console.log(modalvxod);

if (exitButtonModal && modalvxod) {
    exitButtonModal.addEventListener("click", (event) => {
    event.preventDefault();
      modalvxod.removeAttribute("hidden");
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalvxod) {
        modalvxod.setAttribute("hidden", true);
    }

//Объявляем переменную closeModalButton и сохраняем в нее кнопку c классом application__button
const closeModalButton = document.querySelector(".application__close2");

//Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
closeModalButton.addEventListener("click", () => {
// Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
    modalvxod.setAttribute("hidden", true);
});
});

const regButtonModal = document.querySelector(".reg");
const modalregist = document.querySelector(".dialog-regist");
console.log(regButtonModal);
console.log(modalregist);

if (regButtonModal && modalregist) {
    regButtonModal.addEventListener("click", (event) => {
    event.preventDefault();
      modalregist.removeAttribute("hidden");
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalregist) {
        modalregist.setAttribute("hidden", true);
    }
    //Объявляем переменную closeModalButton и сохраняем в нее кнопку c классом application__button
const closeModalButton = document.querySelector(".application__close3");

//Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
closeModalButton.addEventListener("click", () => {
// Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
    modalregist.setAttribute("hidden", true);
});
});


