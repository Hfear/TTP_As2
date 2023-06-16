
// MY MAP
function myMap(arr){

    let newArr= [];
    
    for(let i = 0; i <arr.length ; i++)
    {
        newArr.push(addcallback(arr[i]));
    }
    
    return newArr;
    }
    
    console.log(myMap(arr));