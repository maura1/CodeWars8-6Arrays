/*Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/

//The charCode of 'a' is 97, for 'b', it's 98, we can take 96 from each number and then have 'a' equal to 1, 'b' = 2 etc.

function high(x) {
    //turn x into an array
    const Xarray = x.split(' ');
    // map over the Xarray and calculate the charcode of each word
    //for this we need to split the word into individual letters and
    //use reduce to sum up the value of each word

    const wordTotalValue = Xarray.map((word) => {
        return word.split('').reduce((a, b) => {
            return a + (b.charCodeAt(0) - 96);
        }, 0);
    });

    //get the index with the highest score
    const highestScoreIndex = wordTotalValue.indexOf(
        Math.max(...wordTotalValue)
    );
    console.log(highestScoreIndex);
    const highestScore = Xarray[highestScoreIndex];

    return highestScore;
}
