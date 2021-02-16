const myArray = [ 
    {name : "Eat's Breakfast", duration: 15},
    {name : "Do some coding", duration: 30},
    {name : "Eat lunch", duration: 60},
    {name : "Travel 20 miles", duration: 90}
];

// for loop

function getNames() {
const arrayNames = []


    for(let i = 0; i < myArray.length; i++){ 
        arrayNames.push(myArray[i].name)
        }
        console.log(arrayNames)
    }

// for Each loop with arrow function

function forEach_loop() {
    const emptyArray = []

    myArray.forEach((array) => {
        emptyArray.push(array.name)
    })
    
    console.log(emptyArray)
}

getNames();

forEach_loop()