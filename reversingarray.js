
function reverseArray(arr)
{
    let reverse = [];
    for(let i = arr.length-1; i >=0 ; i--)
    {
        reverse.push(arr[i]);
       
    }
    return reverse;
 
}

let arr = [1,2,3];

console.log(reverseArray(arr));