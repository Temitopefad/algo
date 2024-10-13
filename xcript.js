function insertionSort(arr) {
    // Loop through each element in the array starting from index 1
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let currentElement = arr[i];
        // Initialize the position where the current element should be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than currentElement,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the previous element
        }
        // Insert the current element at its correct position
        arr[j + 1] = currentElement;
    }
    return arr; // Return the sorted array
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
