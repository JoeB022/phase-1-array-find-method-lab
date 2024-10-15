// index.js

// Function to find the year of a Superbowl win
function superbowlWin(record) {
    // Use find() to search for the object with result 'W'
    const winRecord = record.find(game => game.result === "W");

    // If a win is found, return the year; otherwise return undefined
    return winRecord ? winRecord.year : undefined;
}

// Example usage:
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
];

console.log(superbowlWin(record)); // Output: "2015"

