export function divide_among_2(weight){
    if (weight >= 1 && weight <=100){
        let part = weight / 2
        if(part % 2 == 0){
            return "YES"
        }
        else{
            return "NO"
        }
    }
    else{
        console.log("Please Enter Weight in Range")
    }
}
