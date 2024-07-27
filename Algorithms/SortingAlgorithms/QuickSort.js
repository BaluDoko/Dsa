/* Quick Sort: Quick sort is sorting algrothim it uses the divide and conquer method or recursion.
   We have to take any one element from the array that element we can called as pivot element.
   We have to loop the array elements that are lesser than pivot we have to store left array and elements
   that are greater than we have to store the right array. We have repeat the same until we get the sorted 
   array.

  Time Complexity: Wrost case 0(n^2), Average & best case 0(nlogn)
  Space Complexity: Wrost case 0(n), Average & best case 0(log n)


*/

const quickSort = (array) => {
    if(array.length < 2){
        return array
    } 
    let pivot = array[array.length - 1]
    let left = [];
    let right = [];
    for (let i =0 ; i < array.length - 1; i++){
        if(array[i] < pivot){
            left.push(array[i])
        }
        if(array[i] > pivot){
            right.push(array[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


const findPivotIndex = (array, low, high) => {
    if(low < high){
     const pivot = array[high]
     let i = low - 1
     for(let j = low; j<high; j++){
        if(arr[j] < pivot){
            `1`
        }
     }
    }
    return array
}


console.log("Sorted Array in ascending order : ", quickSort([9, -9, 4, 7, 1, 45, 23, 90]) )