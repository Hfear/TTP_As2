
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
//  It doesn't modify the array.

let arr = [1, 2, 3, 4, 5]

function mySome(arr, callback)
{
    for(let i = 0; i< arr.length; i++){
        
        if(callback(arr[i]))
        {return true;}
    }

    return false;

}

function isEven(val, index, array)
{
    if (val %2 == 0)
    {
        return true;
    }
    else
    {
        return false; 
    }
}

console.log(mySome(arr,isEven));