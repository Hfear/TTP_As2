
//FILTER FUNCTION 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

function myFilter(arr){

let filtered = [];

for(let i = 0; i<arr.length; i++)
{
 if(morethan6(arr[i]))
 {
    filtered.push(arr[i]);
 }
}
 return filtered; 
}

function morethan6(word){
    if (word.length > 6)
    {
        return true; 
    }
}

let filtered = myFilter(words);
//console.log(filtered);

