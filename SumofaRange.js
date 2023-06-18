
function range(start, end)
{
    let arr = [];

    for(let i = start; i <= end; i++)
    {
        arr.push(i);
    }
    return arr; 
}

function sum(arr)
{
    let sum = 0;
    for(let i = 0; i< arr.length; i++)
    {
        //console.log(i);
        sum += arr[i];
    }
    return sum;
}


let arr = [[1,2,3,4,5]];
//console.log(range(5,8));
console.log(sum(arr));