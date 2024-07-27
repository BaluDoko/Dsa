/* Bubble Sort: Bubble sort is a sorting algorthim which compare the current element and next element and 
swap the elements into a specific order. This process is repeated until the array is sorted.

Time Complexity: worst case, average case 0(n^2), Best case 0(n)
Space Complexity: 0(1)

*/


const bubbleSort = (array) => {
    for(let i =0 ; i<array.length - 1 ;i++){
        let swap = false;
        for(let j=0; j<array.length - 1 - i; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
                swap = true
            }
        }
        if(!swap){
            break;
        }
    }
    return array;
}

console.log("Sorted Array in Ascending order : ", bubbleSort([6,4,5,1]))
