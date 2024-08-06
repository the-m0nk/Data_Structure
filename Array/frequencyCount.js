// Find the frequency of Each unique number
// const arr = [2 , 4 , 6 , 8 ,2 , 3 , 5 ,2 , 2 , 3]
const arr = ["cat" , "dog" ,  'cat' , "dog" , "Elephant" , "cat"]

function frequency(arr){
    const map = new Map()
    
    for(const obj of arr){
        if(map.has(obj)){
            let currentvalue = map.get(obj)
            map.set(obj , currentvalue +1 )
        }
        else {
            map.set(obj , 1)
        }
    }
    
    return map
}
console.log(frequency(arr))