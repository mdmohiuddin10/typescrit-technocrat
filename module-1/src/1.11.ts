{
    //
    // ternany operator || optinal chaining || nullish coalescing operator
  const age:number = 49
  if(age >=48){
    console.log("older than me");
  }else{
    console.log("elder from him");
  }

  const isAdult = age >=50 ? "Adult" : "not adult";
  console.log(isAdult);

//nullish coalescing operator used only making decision using null and undefined

const isAuthentic = null;
const result1 = isAuthentic ?? "Guest"
console.log(result1);

// optinal chaining
type User ={
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddess?: string;
    }
}

const user: User ={
    name: "Mohiuddin",
    address: {
        city: "ctg",
        road: "Anowra",
        presentAddress: "Same"
    }
}

console.log(user);

const permanentAddress = user.address.permanentAddess ?? "No permanent Address"
console.log(permanentAddress);
    





    // 
}