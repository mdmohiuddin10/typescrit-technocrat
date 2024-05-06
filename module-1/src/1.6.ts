// learning function

// normal function

function add(num1: number, num2: number): number{
    return num1 + num2
}


add(2, 45)

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2

// object -> functin -> method
const  poorUser = {
    name: "mohiuddin",
    balance: 0,
    addBalance(balance: number){
        return this.balance + balance
    }
}


const arr : number[] = [1, 2, 5, 67]

const newArray : number[] = arr.map((elem: number) => elem*elem)
console.log(newArray);