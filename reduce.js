// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array

const arr = [1, 2, 3, 4];

function myReduce(arr, callback)
{
    let sum= 0; 

    for(let i = 0; i<arr.length; i++)
    {
        sum = callback(sum, arr[i]);
    }
    return sum; 
}

function accumulator(sum, curval)
{
 return sum + curval;
}

console.log(myReduce(arr,accumulator));