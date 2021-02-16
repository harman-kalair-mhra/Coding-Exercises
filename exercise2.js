// print duration >= 30 and < 90

const myArray = [ 
    {name : "Eat's Breakfast", duration: 15},
    {name : "Do some coding", duration: 30},
    {name : "Eat lunch", duration: 60},
    {name : "Travel 20 miles", duration: 90}
];

function forEachloop() {
const pushArray = []

myArray.forEach(function(task){
    if(task.duration >= 30 && task.duration < 90){
        pushArray.push(task.name)
    }

    
})
console.log(pushArray)
}

forEachloop()

