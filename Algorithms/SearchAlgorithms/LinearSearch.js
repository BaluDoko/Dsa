/* LinearSearch: Linear search algorithm algorithm. we have to loop untill we can match the given
element in that array 
Time complexity: best case 0(n), best case 0(1), worst case 0(n)
Space complexity: 0(1)
*/

const linearSeach = (array, element) => {
    for(let i =0; i<array.length; i++){
        if(element === array[i]){
            return `Given element found in ${i} position`
        }
    }
    return `Given element not found in array`
}

console.log(linearSeach([2,5,6,7], 7))
