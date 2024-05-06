{

// spreed operator
// rest operator
// destructuring

// speed operator
const bros1:string[] = ["Mir", "Mizan"]
const bros2:string[] = ["Fahad", "Mizanur"]
// bros1.push(bros2)
bros1.push(...bros2)


// object
const mentors1 = {
    math: "Karim",
    English: "Rahim",
    Science: "Ab Sattar"
}

const mentors2 = {
   Social: "Larim",
    Ict: "Fahim",
    Relagion: "Ab Mahim"
}

const mentorList = {
    ...mentors1,
    ...mentors2
}

// rest opertor
const greedFriends = (...friends:string[]) =>{
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend: string) =>console.log(`Hi ${friend}`))
}

greedFriends('abul', 'babul', 'kabul', 'sabul')









}