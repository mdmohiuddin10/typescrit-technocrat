{
    // 
    // null type | unknown type

    const serachName = (value: string | null) =>{
        if(value){
            console.log("searchinng");
        }else{
            console.log("there is nothing to search");
        }
    }
    serachName(null)

    // unknown type
    const getSpeeedInMeterPerSecend = (value: unknown)=>{
        if(typeof value === "number"){
            const convertedSpeed = (value * 1000) / 3600
            console.log(`the speed is ${convertedSpeed} ms-1`);
        }

        else if(typeof value === "string"){
            const [result, unit] = (value.split(' '))
            const convertedSpeed = (parseFloat(result) * 1000) / 3600
            console.log(`the speed is ${convertedSpeed} ms-1`);
        }
        else{
            console.log("wrong input");
        }
    }

    getSpeeedInMeterPerSecend('534647 km-1')

    // never type
    // function throwError(msg: string):never{
    //     throw new Error(msg)
    // }
    // throwError("something went wrong")








    // 
}