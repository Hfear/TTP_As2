
function grabValues(object)
{
    let arr = [];
    for(let key in object)
    {
        arr.push(object[key]);
    }
    return arr;
}

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

  console.log(grabValues(object1));