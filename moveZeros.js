// Given an array nums, write a function to move all 0's to the end of it while maintaining 
// the relative order of the non-zero elements.

function moveZeros(nums)
{
    let replace = 0; 

    for(let i = 0; i < nums.length; i++)
    {
        console.log(i + " = " + nums[i]);

        if(nums[i] === 0)
        {
            //console.log("zero!");
            replace++; 
            nums.splice(i,1);
            //nums = nums.splice(i,1);
            nums.push(0);

            
           
        }
    }

}

let arr = [0,1,0,3,12];

moveZeros(arr);
console.log(arr);
