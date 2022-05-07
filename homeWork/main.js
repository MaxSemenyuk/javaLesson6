// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let srt2 = 'lorem ipsum';
let srt3 = 'javascript is cool';
console.log(str1.length, srt2.length,srt3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str4 = 'hello world';
let str5 = 'lorem ipsum';
let str6 = 'javascript is cool';
console.log(str4.toUpperCase(),str5.toUpperCase(),str6.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str7 = 'HELLO WORLD';
let str8 = 'LOREM IPSUM';
let str9 = 'JAVASCRIPT IS COOL';
console.log(str7.toLowerCase(),str8.toLowerCase(),str9.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';
let stringToarray = str => str.split(' ');
let arr = stringToarray(str2); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let nummers = [10,8,-7,55,987,-1011,0,1050,0];
console.log(nummers.map(value => value.toString()))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
    let nums = [11,21,3];
    let sortNums = (array, type)=>{
        if (type ==='ascending') array.sort((a,b)=>a-b);
        if (type === 'descending') array.sort((a,b)=>b-a);
        return array
}
console.log(sortNums(nums,'ascending')) // [3,11,21]
console.log(sortNums(nums,'descending')) // [21,11,3]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a,b)=>a.monthDuration - b.monthDuration))
console.log(coursesAndDurationArray.filter(value => value.monthDuration >5))

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'spade', value:'6' , color:'black'},
    {cardSuit: 'spade', value:'7' , color:'black'},
    {cardSuit: 'spade', value:'8' , color:'black'},
    {cardSuit: 'spade', value:'9' , color:'black'},
    {cardSuit: 'spade', value:'10' , color:'black'},
    {cardSuit: 'spade', value:'jack' , color:'black'},
    {cardSuit: 'spade', value:'queen' , color:'black'},
    {cardSuit: 'spade', value:'king' , color:'black'},
    {cardSuit: 'spade', value:'ace' , color:'black'},
    {cardSuit: 'clubs', value:'6' , color:'black'},
    {cardSuit: 'clubs', value:'7' , color:'black'},
    {cardSuit: 'clubs', value:'8' , color:'black'},
    {cardSuit: 'clubs', value:'9' , color:'black'},
    {cardSuit: 'clubs', value:'10' , color:'black'},
    {cardSuit: 'clubs', value:'jack' , color:'black'},
    {cardSuit: 'clubs', value:'queen' , color:'black'},
    {cardSuit: 'clubs', value:'king' , color:'black'},
    {cardSuit: 'clubs', value:'ace' , color:'black'},
    {cardSuit: 'diamond', value:'6' , color:'red'},
    {cardSuit: 'diamond', value:'7' , color:'red'},
    {cardSuit: 'diamond', value:'8' , color:'red'},
    {cardSuit: 'diamond', value:'9' , color:'red'},
    {cardSuit: 'diamond', value:'10' , color:'red'},
    {cardSuit: 'diamond', value:'jack' , color:'red'},
    {cardSuit: 'diamond', value:'queen' , color:'red'},
    {cardSuit: 'diamond', value:'king' , color:'red'},
    {cardSuit: 'diamond', value:'ace' , color:'red'},
    {cardSuit: 'heart', value:'6' , color:'red'},
    {cardSuit: 'heart', value:'7' , color:'red'},
    {cardSuit: 'heart', value:'8' , color:'red'},
    {cardSuit: 'heart', value:'9' , color:'red'},
    {cardSuit: 'heart', value:'10' , color:'red'},
    {cardSuit: 'heart', value:'jack' , color:'red'},
    {cardSuit: 'heart', value:'queen' , color:'red'},
    {cardSuit: 'heart', value:'king' , color:'red'},
    {cardSuit: 'heart', value:'ace' , color:'red'},
    {value: 'joker', color: 'red'},
    {value: 'joker', color: 'black'}
]
console.log(cards.find(value =>  value.cardSuit ==='spade'&& value.value==='ace'));
console.log(cards.filter(value => value.value === '6'));
console.log(cards.filter(value =>  value.color === 'red'));
console.log(cards.filter(value => value.cardSuit === 'diamond'));
console.log(cards.filter(value => {
    if (value.cardSuit === 'clubs'){
        return value.value >= '8' || value.value.length > 2
    }
}))