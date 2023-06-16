// The push() method adds the specified elements to the end of an array and returns the new length of the array.

function myPush(arr, addition)
{
arr[arr.length] = addition;
return arr.length;
}

const arr = [1,2,3];

console.log(myPush(arr,4));
console.log(arr);
