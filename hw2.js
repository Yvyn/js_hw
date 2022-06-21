/*2я домашка по JS со звездочками:

1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1*/



function power(a, b){
    let result = 1;
    for(let i = 0; i <b; i++)
    {
        result = result * a;
    }
    console.log(result);
}
power(2,10);

//




/*1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2*/


function power2(b){
    let a = 2
    let result = 1;
    for(let i = 0; i <b; i++)
    {
        result = result * a;
    }
    console.log(result);
}
power2(10);

/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)*/

let str = '';
for (let i = 0; i < 5; i++) {
	str = str + ':)';
	console.log (str);
}


/*

2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/


function printSmile(stroka, numberOfRows){
    let str = '';
    for (let i = 0; i < numberOfRows; i++) {
        str = str + stroka;
        console.log(str );
    }}




printSmile("hi", 3 )

/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'*/
function getWordStructure(word) {
    word = word.toLowerCase().split('')
        let count_v = 0;
        let count_c = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const consonants = ["b", "c", "d", "fF", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

      word.forEach(el =>{
        if (vowels.includes(el)) count_v ++
        else if  (consonants.includes(el)) count_c ++
      })
        console.log( "vowels =" + count_v +" and " + " consonants ="  + count_c )
    }
    getWordStructure("case")
    getWordStructure("Case")
    getWordStructure("Check-list")
      
/*

4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'*/

 function isPalindrome (word) {
 word = word.toLowerCase()
 
    if (word == word.split('').reverse().join('')) {
        console.log(word + ' is palindrome.');
    }
    else {
        console.log(word + ' is not palindrome.');
    }
}

isPalindrome("abba")
isPalindrome("Abba")
