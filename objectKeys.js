// The Object.keys() static method returns an array
//  of a given object's own enumerable string-keyed 
//  property names.


function grabKeys(object)
{
    let arr = [];

    for(let item in object )
    {
        arr.push(item);
    }
    return arr;
}

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

  console.log(grabKeys(object1));