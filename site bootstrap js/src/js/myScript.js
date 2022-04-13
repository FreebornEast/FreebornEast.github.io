"use strict"

//Тип сайта
let type = [
    [
    "Коммерческий сайт",
    "Информационный сайт",
    "Социальный сайт",
    "Трафиковый сайт",
    "Веб-сервис",
    "Черное SEO",
    "Другое",
    ],
    [
    1000,
    2000,
    3000,
    4000,
    5000,
    6000,
    ],
];

//Дизайн сайта
let design = [
    [
    "Минимализм",
    "Красивая типографика",
    "Классический стиль",
    "Responsive",
    "Корпоративный стиль",
    "Retro",
    "Hi-tech",
    "Organic & natural",
    "Дугое",
    ],
    [
    1000,
    2000,
    3000,
    4000,
    5000,
    6000,
    7000,
    8000,
    ],
];

//Адаптивность сайта
let adaptivity = [
    [
    "Фиксированная верстка",
    "Резиновая верстка",
    "Гибкая верстка",
    ],
    [
    1000,
    2000,
    3000,
    ]
];

/*
let type = {
    1: 1000,
    2: 2000,
    3: 3000,
    4: 4000,
    5: 5000,
    6: 6000,
}

let design = {
    1: 1000,
    2: 2000,
    3: 3000,
    4: 4000,
    5: 5000,
    6: 6000,
    7: 7000,
    8: 8000,
}

let adaptivity = {
    1: 1000,
    2: 2000,
    3: 3000,
}
*/

//Переменные для дальнейшей работы
let changeTypeAnswer = 0;
let changeDesignAnswer = 0;
let changeAdaptivityAnswer = 0;


let hello = confirm ("Привет! Сейчас я быстро помогу тебе с выбором параметров сайта. Ответь на 3 вопроса, хорошо?");

if (hello) {
    alert ("Отлично, поехали!");
    changeTypeFunction();
}
else {
    alert ("Хорошо, смотри сам и выбирай! :)");
};

//Функция для выбора типа сайта (1 вопрос)
function changeTypeFunction () {

    while (true) {
        
        let changeType = prompt("Выбери тип сайта, где: \n1-Коммерческий сайт; \n2-Информационный сайт; \n3-Информационный сайт; \n4-Трафиковый сайт; \n5-Веб-сервис; \n6-Черное SEO; \n7-Другое.");

        if (changeType === "") {
            alert ("Введи значение из предлагаемонго списка!");
            changeTypeFunction (); // Возврат к 1 функции
        }
        
        else if (changeType === null) {
            break;
        }

        else {
            changeTypeAnswer = changeType;
            checkChangeTypeAnswer(); // Переход к проверке правильности выбора
        }
        break;
    };
};

//Функция проверки правильности выбора
function checkChangeTypeAnswer () {

    if (changeTypeAnswer > 0 && changeTypeAnswer < 7) {
        changeDesignFunction (); // Переход ко 2 функции выбор дизайна
    }
    else if (changeTypeAnswer == 7) {
        alert ("Выбран пункт Другое, опиши свой заказ ниже на сайте.");
    }
    else {
        alert ("Введи значение из предлагаемонго списка!");
        changeTypeFunction (); // Возврат к 1 функции выбор типа сайта
    };
};

//Функция для выбора дизайна сайта (2 вопрос)
function changeDesignFunction () {

    while (true) {
        
        let changeDesign = prompt("Выбери дизайн сайта, где: \n1-Минимализм; \n2-Красивая типографика; \n3-Классический стиль; \n4-Responsive; \n5-Корпоративный стиль; \n6-Retro; \n7-Hi-tech; \n8-Organic & natural; \n9-Дугое");

        if (changeDesign === "") {
            alert ("Введи значение из предлагаемонго списка!");
            changeDesignFunction (); // Возврат ко 2 функции 
        }
        
        else if (changeDesign === null) {
            break;
        }

        else {
            changeDesignAnswer = changeDesign;
            checkChangeDesignAnswer (); // Переход к проверке правильности выбора
        }
        break;
    };
};

//Функция проверки правильности выбора
function checkChangeDesignAnswer () {

    if (changeDesignAnswer > 0 && changeDesignAnswer < 9) {
        console.log("Ввели от 1 до 10");
        changeAdaptivityFunction ();
    }
    else if (changeDesignAnswer == 9) {
        alert ("Выбран пункт Другое, опиши свой заказ ниже на сайте.");
    }
    else {
        alert ("Введи значение из предлагаемонго списка!");
        changeDesignFunction(); // возврат ко 2 функции выбора дизайна сайта
    };
};

//Функция для выбора адаптивности сайта (3 вопрос)
function changeAdaptivityFunction () {

    while (true) {
        
        let changeAdaptivity = prompt("Выбери адаптивность сайта, где: \n1-Фиксированная верстка;\n2-Резиновая верстка;\n3-Гибкая верстка");

        if (changeAdaptivity === "") {
            alert ("Введи значение из предлагаемонго списка!");
            changeAdaptivityFunction (); // Возврат к 3 функции 
        }
        
        else if (changeAdaptivity === null) {
            break;
        }

        else {
            changeAdaptivityAnswer = changeAdaptivity;
            checkChangeAdaptivityAnswer (); // Переход к проверке правильности выбора
        }
        break;
    };
};

//Функция проверки правильности выбора
function checkChangeAdaptivityAnswer () {

    if (changeAdaptivityAnswer > 0 && changeAdaptivityAnswer < 4) {
        console.log("Ввели от 1 до 3");
        total ();
        
    }
    else {
        alert ("Введи значение из предлагаемонго списка!");
        changeAdaptivityFunction(); // возврат к 3 функции выбора адаптивности сайта
    };
};

//Считаем итоговую сумму


function total () {

    let summ = type[1][changeTypeAnswer - 1] + design[1][changeDesignAnswer - 1] + adaptivity[1][changeAdaptivityAnswer - 1];

    let total = confirm (`Итого получилось:
    \n1-${type[0][changeTypeAnswer - 1]} - ${type[1][changeTypeAnswer - 1]} рублей;\n2-${design[0][changeDesignAnswer - 1]} - ${design[1][changeDesignAnswer - 1]} рублей;\n3-${adaptivity[0][changeAdaptivityAnswer - 1]} - ${adaptivity[1][changeAdaptivityAnswer - 1]} рублей;
    \nСумма составляет: ${summ} рублей.`);
    
    if (total) {
        alert ("Отлично, буду выполнять!");
    }
    else {
        alert ("Хочешь что то изменить?");
        changeTypeFunction (); // Переход к 1 вопросу
    };
    
}
