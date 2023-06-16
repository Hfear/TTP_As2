// The includes() method determines whether an array includes a certain value among its entries,
//  returning true or false as appropriate.

const arr = [1,2,3];
const pets = ['cat', 'dog', 'bat'];

function myIncludes(arr, target)
{
    for(let i= 0; i< arr.length; i++)
    {
        if(arr[i] === target)
        {
            return true;
        }
    }

    return false; 
}

console.log(myIncludes(pets,'cat'));
console.log(myIncludes(pets,'cow'));
console.log(myIncludes(arr,2));

