// The indexOf() method returns the first index at which a given element
//  can be found in the array, or -1 if it is not present.


function myIndexOf(arr, target)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === target)
        {
            return i;
        }
    }
    return -1;
}

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(myIndexOf(beasts,'a'));