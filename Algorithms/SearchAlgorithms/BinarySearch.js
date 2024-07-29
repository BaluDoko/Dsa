/* Binary Search: Binary search is a efficient searching algorithm for sorted array. We have to find the 
middle element of the given array and compare with searching element if middle element is less than the
target it will do same process on left side other wise right side

Time complexity: best case 0(1), 0(log n) for average & worst cases
Space complexity: 0(1) for all cases
*/


const binaraySearch = (array, element) => {
    let low = 0;
    let high = array.length;
    
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
    
        if(element === array[mid]){
            return `Given is find in the ${mid} position`
        }
       else if(array[mid] < element){
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
   
  return `Given ${element} not found in the array`

}

console.log(binaraySearch([1,2,3,4,5], 3))