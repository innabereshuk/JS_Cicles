// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

(function(){
    'use strict';
    
         
    let numberInput = {
        num1: {
            pattern: /^-?\d+(\.\d{1,2})?$/,
            message: 'Введите начало диапазона',
            value: null,
        },
        num2: {
            pattern: /^-?\d+(\.\d{1,2})?$/,
            message:'Введите конец диапазона',
            value: null,
        }
    };

    
    let terms = []; 
    let sum = 0;
    let accepted = false;
    
    do {
        for (let i in numberInput) {
            let option = numberInput[i];
            let answer = +prompt(option.message);
                if (option.pattern.test(answer)) {
                    accepted = true;
                    option.value = answer;
                        } if (option.value === null || isNaN(option.value) || option.value == '') {
                            accepted = false;
                            alert('Некорректный ввод. Попробуйте еще раз!', '');
                            answer = +prompt(option.message);
                } 
         }
    } while (!accepted);
       
       for (numberInput.num1.value; numberInput.num1.value <= numberInput.num2.value; numberInput.num1.value++ ) {
               terms.push(numberInput.num1.value);
                    
       }
   
       for (var i = 0; i <= terms.length - 1; i++) {
           sum+= terms[i];
    
       }
   
       alert('Сумма чисел выбранного вами диапазона равняется ' + `${sum}`);
   
   
 

   
console.log(numberInput.num1.value);
console.log(numberInput.num2.value);
console.log(terms);
console.log(sum);



// Запросить 2 числа и найти только наибольший общий делитель.

let x = +prompt('Введите первое число', '');
let y = +prompt('Введите второе число', '');

function NOD(x, y) {
    if (x == 0)
        return alert('Наибольшим общим делителем является: ' + `${y}`);

    while (y != 0) {
        if (x > y)
            x = x - y;
        else
            y = y - x;
    }

    return alert('Наибольшим общим делителем является : ' + `${x}`);
}

NOD(x, y);


// Запросить у пользователя число и вывести все делители этого числа.

 let num = prompt('Введите любое число больше 0');
 let dividers = [];

 function allDiviers() {
     for (let i = 1; i < num; i++) {
         if (num % i == 0) {
             dividers.push(i);
         }
     }
     alert(`Делители числа  ${num} : \n${dividers}`);
 }

allDiviers();

// Определить количество цифр в введенном числе.

 let number = prompt('Введите любое число');
 let quantity = 0;

 if (number != '' && number !== null) {
     for(let i = 0; i < number.length; i++) {
         quantity += 1;
     }
     alert(`В набранном вами числе ${quantity} цифр`);
} else {
    alert('Операция отменена');
}
    

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
 
let nums = [] = prompt('Введите через зяпятую 10 чисел');


if (nums !== null) {
    nums = nums.split(',');
    console.log(nums);
    
    let positivNums = 0;
    let negativNums = 0;
    let zero = 0;
    let evenNum = 0;
    let oddNum = 0;
    

        function numberQuantity() {
           for (let i = 0; i < nums.length; i++) {

                if (nums[i] > 0 && nums[i] !=0) {
                       positivNums += 1;
                    } else if (nums[i] < 0 && nums[i] != 0) {
                        negativNums += 1;
                       } else {
                            zero += 1;
                        }

                if (nums[i] % 2 == 0 && nums[i] != 0) {
                    evenNum +=1;
                     }
                    if (nums[i] % 2 != 0 && nums[i] != 0) {
                         oddNum += 1;
                    }
            }
            document.write(`Вы ввели положительных чисел: ${ positivNums} <br> отрицательных чисел: ${negativNums} <br> нулей: ${zero} <br> чётных чисел: ${evenNum} <br> нечётных чисел: ${oddNum}`)
        }

    numberQuantity();

    } else {
        alert('Отмена операции! Вы ввели больше 10 цифр.');
    }



    

})();


