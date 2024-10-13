function analyzeSentence() {
    // Initialize counters
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";

    // Prompt the user to enter a sentence
    let sentence = "";
    console.log("Enter a sentence (ending with a period):");

    // Use a loop to read characters until a period is entered
    process.stdin.setEncoding('utf8');  // Set encoding to UTF-8
    process.stdin.on('data', function (data) {
        for (let char of data) {
            // Append the character to the sentence
            sentence += char;

            // Increment character count
            charCount++;

            // Check if the character is a vowel
            if (vowels.includes(char)) {
                vowelCount++;
            }

            // Break the loop if the character is a period
            if (char === '.') {
                // Count the number of words by splitting the sentence
                wordCount = sentence.trim().split(/\s+/).length - 1;  // Subtract 1 for the period
                break;
            }
        }
        // Stop the input stream after detecting the period
        process.stdin.pause();
    });

    // Output the results after the input is completed
    process.stdin.on('end', function () {
        console.log(`Length of the sentence (characters): ${charCount}`);
        console.log(`Number of words in the sentence: ${wordCount}`);
        console.log(`Number of vowels in the sentence: ${vowelCount}`);
    });
}

// Call the function
analyzeSentence();
