let isNumber = 25
let isString = "Text\"33\""
let isBoolean = true
let isNull = null
let isUndefined = undefined

let isObject = {
    isProoerty: isNumber,
    isMethod: (varr) => alert(varr)
}

isNumber = 4521
let isArray =[isNumber, true, false, null]

let result = 20 + 1,
    result2 = 20 - 1,
    result3 = 20 * 2,
    result4 = 20 / 2,
    result5 = 20 ** 2, // возвести в степень
    result6 = 20 % 2, // остаток от деления
    result7 = 100 - (result5 = 2 + 3)

console.log(++result2)//20
console.log(result2++)//20
console.log(result2)//21

console.log(--result2)//20
console.log(result2--)//20
console.log(result2)//19

result = result + 20
result += 20

result **= 20
console.log(result)

/**операторы для работы с двоичной системой */
//AND
let resultBin = 5 & 3 // = 0101 * 0011 = 0001 => 1

//OR
let resultOr = 2 | 1 // = 0010 OR 0001 =0011 => 3

//XOR
let resultXor = 2 ^ 2 // 0010 XOR 0010 = 0000 => 0

//NOT
let resultNot = ~2 //0010 NOT = 1 101

//>>-побитовый сдвиг вправо
let resultRight = 8 >> 2 // получим 8 делим на 2 в 2 степени = 2

//<< -побитовый сдвиг влево
let resultLeft = 2 << 2 // получим 2* 2 во 2 степени = 8
console.log(resultLeft)  

/**РАБОТА С ОКОШКАМИ */
//alert("Is alert")// всплывающее окно в браузере
//let resultconfirm = confirm("Is confirm ?") // предлогает окошко с подтверждением или отменой
//let resultPrompt = prompt ("Is prompt?" , "yes") // окошко с imputom. 2 значение это дефалт для input
//console.log(resultPrompt)

/**УСЛОВНЫЕ КОНСТРУКЦИИ */
/*if( 10 > 15 ) {
    alert("Is TRUE!!!")
} else if(10 > 5) {
    alert("Is Second TRUE!!!")

} else {
    alert("Is FALSE!!!")
}*/


/**тернарный оператор */
//let foo = 10 > 5 ? 10 : 5 //если true то 10, если false то 5

//let some = 10 > 5 && 5 > 2
//&& - вернет первое true
// || - вернет последнее true

let resulter = prompt("You know git ?")
const YES = "yes"

if(resulter == YES) {
    let  resultConf = confirm("continue ?")
    //let resultAlert = alert("ok")
    //console.log(resultAlert)
    resultConf && alert("ok") || alert("end")
} else {
    let  resultConf = confirm("download git for learning ?")
    if(resultConf) {
        alert("10%")
        alert("50%")
        alert("100%")
    } else {
        alert("end")
    }
}

alert("Thank you!")
/*if(4) {
    var someVar = "yes"
    let someLet = "yes"
    const SNAKE_CASE ="yes"
    alert(SNAKE_CASE)
}*/
