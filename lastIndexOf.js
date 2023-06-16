

function myUnshift(arr, target)
{
    for(let i = arr.length; i > 0; i--)
    {

        if(arr[i] == target)
        {
            return i;
        }
    }
    return -1;
}

const arr = "canal";

console.log(myUnshift(arr,"a"));