let originalArray = [
    {
        age :29,
        color: "red",
        alive : false,
        name: ['rohan']
    },

     {
        age :19,
        color: "blue",
        alive : false,
        name: ['likith']
    },

     {
        age :25,
        color: "black",
        alive : false,
        name: ['sonu']
    },

     {
        age :9,
        color: "green",
        alive : false,
        name: ['neha']
    },

     {
        age :27,
        color: "white",
        alive : false,
        name: ['siki']
    },

     {
        age :21,
        color: "yellow",
        alive : false,
        name: ['candy']
    },
]

const newArray =[...originalArray];

console.log( "originalArray",originalArray);



//  Filter:-.


const operation1 =[...originalArray]  //makes a copy of your original array without changing it.
const underten = originalArray.filter((originalArray,index)=>{ // the filter method checks every obj in Array and it retuns only where the age is less than 10
    return originalArray.age<10
})

console.log("Below 10",underten)


const aboveTen = originalArray.filter((originalArray,index)=>{
    return originalArray.age>10
})

console.log("Above 10",aboveTen)



//Find:-

const operation2 =[...originalArray]

const findGreen =originalArray.find((originalArray,index)=>{ //find searches inside an array and returns the first item that matches a condition
    
    return originalArray.color==="green" 
})
console.log("Find :-" ,findGreen);



// //Map:-



const operation3 =[...originalArray]
const updatedoriginalArray=originalArray.map((originalArray,index)=>{ // map method used on arrays we can do changes and we can add new array and returns a new array
    originalArray['country'] ="INDIA"
    return originalArray
})
console.log("UPDATED:-",updatedoriginalArray);

const deleteArray = originalArray.map((originalArray,index)=>{
    originalArray = delete originalArray.color
    return originalArray
})
console.log("deleteArray",deleteArray);




// //Foreach:-

const operation4 =[...originalArray]

const print= originalArray.forEach((originalArray,index)=>{ // it will loop every array and it will print every item
    console.log("print:-",originalArray);
    
})

//Reduce :-
const operation5 =[...originalArray]

const totalValue = originalArray.reduce((sum,originalArray)=> // it will goes through the array step by step  and it will add until final value 
    sum + originalArray.age,0
)
console.log("Total age", totalValue);

//sort:-
const operation6 =[...originalArray]

const sortedByAge = originalArray.sort((originalArray, index) => originalArray.age - index.age);// it will arranges the values in specific order 
console.log(sortedByAge);


//Create a new array containing only one property (names, colors etc.)

const operation7 =[...originalArray]

const onlyage = originalArray.map(originalArray => originalArray.age)
console.log("onlyage",onlyage);

// Use every() to check if all items meet a condition.


const operation8 =[...originalArray]

const allAlive = originalArray.every(originalArray => originalArray.alive === false); // it checks inthe array match the condition and it will give out put like true or false 
console.log("all Alive ",allAlive);

//check if at least one item meets a condition.

const operation9 =[...originalArray]
const hasTeenager = originalArray.some(originalArray => originalArray.age < 10);// it will check the array it will meets the condition and it will give out put true or false 

console.log("Teenager :- ",hasTeenager);

//join():-
const operation10 =[...originalArray]

const getAllNames =originalArray.map(item => item.name).join(", ");

console.log("get all",getAllNames);



//. Combine your array with another using spread operator.


console.log(getAllNames);

const person =[
    {
        age :35,
        color: "olive green ",
        alive : false,
    },

    {
        age :15,
        color: "Orange. ",
        alive : false,
    }

]

const mixedarray=[...originalArray , ...person]

console.log(mixedarray);