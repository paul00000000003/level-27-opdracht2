function getWordLengths(arr) {
    arr2 = arr.map(element => element.length);
    return arr2;
}

/*
test("Get word lengths", function() {
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];

    const output = getWordLengths(words);
    expect(output).toEqual(expected);
});
*/
module.exports = getWordLengths;