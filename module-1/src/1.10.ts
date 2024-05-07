{
// 
// Union type
type FrontendDeveloper = "Fakibaz" | "Junior Developer"
type FullStackDeveloper = "frontend" | "Expert Developer"

type Developer = FrontendDeveloper | FullStackDeveloper


const newDeveloper : FrontendDeveloper = "Junior Developer";

type User = {
    name: string,
    email: string,
    gender: "male" | "Female",
    bloodGroup: "O+" | "Ab+" | "A+"

}

const user1: User ={
    name: "Abdullah",
    email: "hgduegdhjgbdfgfg",
    gender: "male",
    bloodGroup: "O+"
}

// 
type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer"
}
type BekenddDev = {
    skills: string[];
    designation2: "Beckend Developer"
}

type FullStackDev = FrontendDev & BekenddDev;

const fullStackDev : FullStackDev ={
    skills: ['HTML', 'CSS', "JS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Beckend Developer"
}






// 
}