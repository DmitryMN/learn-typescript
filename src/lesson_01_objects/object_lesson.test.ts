import {CityType} from "./object_lesson";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {buildedAt: 1980, repaired: false, address: {number: 100, street: { title: "Vologodskaya"}}},
            {buildedAt: 1960, repaired: true, address: {number: 12, street: { title: "Moroseika"}}},
            {buildedAt: 1970, repaired: false, address: {number: 11, street: { title: "Vologodskaya"}}}
        ],
        governmentBuildings: ["Ambulance", "Police", "Fire station"],
        citizensNumber: 100000,
    }
});

test("correct test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);
    expect(city.governmentBuildings.length).toBe(3);
    expect(city.citizensNumber).toBe(100000);
})