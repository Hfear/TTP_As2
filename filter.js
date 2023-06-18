
//FILTER FUNCTION 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

function myFilter(arr, callback){

let filtered = [];

for(let i = 0; i<arr.length; i++)
{
 if(callback(arr[i],i,arr))
 {
    filtered.push(arr[i]);
 }
}
 return filtered; 
}

function morethan6(word, i, arr){
    if (word.length > 6)
    {
        return true; 
    }
}

let filtered = myFilter(words);
console.log(filtered);

