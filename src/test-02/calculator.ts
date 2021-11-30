import {ActionType, calculator} from "./calculator.test";

test("calculate sum", () => {
    let a = 10;
    let b = 20;
    let action: ActionType = {type: "SUM", number: b};

    let result = calculator(a, action);
    expect(result).toBe(30);
})