
const arr = [1,2,3];

// MY MAP
function myMap(arr,callback){

    let newArr= [];
    
    for(let i = 0; i <arr.length ; i++)
    {
        newArr.push(callback(arr[i]));
    }
    
    return newArr;
}

function addone(val, i, array)
{
    return val+1;
}
    

    console.log(myMap(arr,addone));