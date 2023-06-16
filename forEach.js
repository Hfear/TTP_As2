console.log("hello");

//FOR EACH
let arr = [1,2,3];


function addone(num, i, arr){
 return num + 1; 
}

function myEach(arr, callback){
 
    for(let i = 0; i< arr.length; i++)
    {
        arr[i] = callback(arr[i], i, arr);
    }

}


myEach(arr, addone);
console.log(arr);


