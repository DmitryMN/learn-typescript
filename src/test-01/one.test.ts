import {splitIntoWords, sum} from "./one";

test("sum should be correct", () => {
    // data
    let a = 1;
    let b = 2;
    // action
    let result = sum(a, b);
    // expect result
    expect(result).toBe(3);
});

test("spliting into words should be correct", () => {
    // data
    let a = "hello my friends"
    // action
    let result = splitIntoWords(a);
    // expect result
    expect(result.length).toBe(3);
    expect(result[0]).toBe("hello");
})
