{
// 
// type alias
type Student = {
    name: string,
    age: number,
    gender: string,
    contactNo? : string,
    address: string
}


const student1: Student = {
    name: "Mezbah",
    age: 15,
    gender: "Male",
    contactNo: "09u658957",
    address: "Chattogram"
}

const student2: Student = {
    name: "Mir",
    age: 43,
    gender: "Male",
    address: "Dhaka"
}

type UserName = string;
type IsAdmin = boolean;
const userName: UserName = "Mohiuddin";
const isAdmin: IsAdmin = true


type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;


// 
}