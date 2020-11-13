//Soal 1
const golden = goldenfunction = () => {
    console.log("this is golden!!")
}
golden()
console.log("\n");

//Soal 2
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(`${firstName} ${lastName}`)
            return
        }
    }
}
//Driver Code 
newFunction("William", "Imoh").fullName()
console.log("\n");

//Soal 3
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation, spell } = newObject;
// Driver code
console.log(firstName, lastName, destination, occupation)
console.log("\n");

//Soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)
console.log("\n");

//Soal 5
const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
// Driver Code 
console.log(before) 
