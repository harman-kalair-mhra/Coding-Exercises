// print duration >= 30 and < 90
// for each loop with arrow function

const myArray = [ 
    {name : "Eat's Breakfast", duration: 15},
    {name : "Do some coding", duration: 30},
    {name : "Eat lunch", duration: 60},
    {name : "Travel 20 miles", duration: 90}
];

function forEachloop() {
const pushArray = []

myArray.forEach((task) => {
    if(task.duration >= 30 && task.duration < 90){
        pushArray.push(task.name)
    }

    
})
console.log(pushArray)
}

// iterating using mapping

const pushArray2 = []

const mapArray = myArray.map(task2 => {
    if(task2.duration >= 30 && task2.duration < 90){
        pushArray2.push(task2.name)
    }
})

console.log(pushArray2)
    

forEachloop()

