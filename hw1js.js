let item_1 = 5
console.log(item_1)


let item_2 = 3
console.log(item_2)

let item_3 = item_1 + item_2
console.log(item_3)

let item_4 = "Yolochka"
console.log(item_4)


console.log(item_3 + item_4)

console.log(item_3 * item_4)

let item_5 = item_3

let item_6
let item_6_type

item_6 = 15

item_6_type = typeof (item_6)

console.log("item_6 == " + item_6, "item_6_type == " + item_6_type)


let item_7 = String(item_6)
let item_7_type
item_7_type = typeof (item_7)


console.log("item_7 == " + item_7, "item_7_type == " + item_7_type)

let age_1 = 10
let age_2 = 18
let age_3 = 60


if (age_1 < age_2) {

 console.log ("You don’t have access cause your age is " + age_1 + "  It’s less then ")
 
} else if (age_1 >=  age_2 && age_1 <  age_3) {console.log ("Welcome  !")

} else if (age_1  > age_3) {console.log ("Keep calm and look Culture channel") }
else {
    console.log ("Technical work ")  
}


/*HW_1* 
Задания с разным количеством звездочек:)
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61 */

function age (ages) {
    if (ages < age_2) {

        console.log ("You don’t have access cause your age is " + ages + "  It’s less then ")
        
       } else if (ages >=  age_2 && ages <  age_3) {console.log ("Welcome  !")
       
       } else if (ages  > age_3) {console.log ("Keep calm and look Culture channel") }
       else {
           console.log ("Technical work ")  
       }

}

age (17)
age (18)
age (61)


/*2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.*/

function age2 (ages) {

    if ( typeof ages !== "number") {
     console.error ("error age");
      }
    
     else { if (ages < age_2) {
 
         console.log ("You don’t have access cause your age is " + ages + "  It’s less then ")
         
        } else if (ages >=  age_2 && ages <  age_3) {console.log ("Welcome  !")
        
        } else if (ages  > age_3) {console.log ("Keep calm and look Culture channel") }
        else {
            console.log ("Technical work ")  
        }
 
 }}
 
 age2 (17)
 age2 (18)
 age2 (61)
 

/*3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number*/

function age3 (ages) {
    let a = (Number(ages))
       if ( typeof a !== "number") {
        console.error  ("error age")
         }
       
        else { if (a < age_2) {
    
            console.log ("You don’t have access cause your age is " + ages + "  It’s less then ")
            
           } else if (a >=  age_2 && a <  age_3) {console.log ("Welcome  !")
           
           } else if (a  > age_3) {console.log ("Keep calm and look Culture channel") }
           else {
               console.log ("Technical work ")  
           }
    
    }}
   
   
       
   age3(17)
   age3(18)
   age3(61)
/*
4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке*/



    function age4 () {
        let  yuorage = parseInt(prompt ("How old are you ?"))
        
        if ( typeof yuorage !== "number") {
            console.error  ("error age");
             } else { 
           if (yuorage < age_2) {
        
                console.log ("You don’t have access cause your age is " + yuorage + "  It’s less then ")
                
               } else if (yuorage >=  age_2 && yuorage <  age_3) {console.log ("Welcome  !")
               
               } else if (yuorage  > age_3) {console.log ("Keep calm and look Culture channel") }
               else {
                   console.log ("Technical work ")  
               }
        
        }}
        

age4()

