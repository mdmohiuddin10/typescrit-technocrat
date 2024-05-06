// distructuring
const user = {
    id: 342,
    name: {
        firtsName: "Mohi",
        lastName: "Uddin"
    },
    contactNo: "03646265678",
    address: "Anowara, Chattogram"
}

const {
    contactNo, 
    name : {lastName},
} = user


// array distructurnig
const myFriends = ['shakil', 'joy', 'ytuu', 'hjgfgregf']

const [a,b, bestFriend] = myFriends