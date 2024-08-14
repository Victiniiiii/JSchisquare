let testarray = [];

async function testTenThousand() {    
    for (i = 0; i < 10000; i++) {
        randomSongFunctionMainMenu();
        await sleep(10)
        testarray.push(document.getElementById("song-name").innerHTML);
    }

    const countOccurrences = arr => {
        const countMap = arr.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});
    
        for (const [item, count] of Object.entries(countMap)) {
            console.log(`${item}: ${count}`);
        }
    };    
    countOccurrences(testarray);
    console.log(chiSquareTest(testarray) ? 'The array is statistically random.' : 'The array is not statistically random.');
}

function chiSquareTest(testarray) {
    const freq = {};
    testarray.forEach(item => {
        freq[item] = (freq[item] || 0) + 1;
    });

    const totalElements = testarray.length;
    const uniqueElements = Object.keys(freq).length; // Should be 173
    const expectedFrequency = totalElements / uniqueElements;

    let chiSquare = 0;
    for (const key in freq) {
        const observedFrequency = freq[key];
        chiSquare += Math.pow(observedFrequency - expectedFrequency, 2) / expectedFrequency;
    }

    // Critical value for alpha = 0.01 and degrees of freedom = 172
    const criticalValue = 219.189;

    return chiSquare <= criticalValue;
}
