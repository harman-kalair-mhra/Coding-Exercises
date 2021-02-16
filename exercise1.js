const myArray = [ 
    {name : "Eat's Breakfast", duration: 15},
    {name : "Do some coding", duration: 30},
    {name : "Eat lunch", duration: 60},
    {name : "Travel 20 miles", duration: 90}
];

function getNames() {
const testNames = []


    for(let i = 0; i < myArray.length; i++){ 
        testNames.push(myArray[i].name)
        }
        console.log(testNames)
    }

getNames()