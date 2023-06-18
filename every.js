// The every() method tests whether all elements in the array 
// pass the test implemented by the provided function. 
// It returns a Boolean value.


const arr = [1, 30, 39, 29, 10, 13, 40];

function myEvery(arr, callback)
{
    for(let i=0 ; i<arr.length; i++)
    {
        if(!callback(arr[i],i,arr))
        {
            return false
        }
    }
    return true;
}

function below40(el,index,arr)
{
    if(el < 40 )
    {
        return true;
    }
    else{
        return false; 
    }
}

console.log(myEvery(arr,below40));