/*
test("Find the needle", function() {
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    const output = findNeedle(words, "needle");
    expect(output).toEqual(expected);
});
*/

function findNeedle(arr, element) {
    return arr.findIndex((index) => index === element);
}

module.exports = findNeedle;