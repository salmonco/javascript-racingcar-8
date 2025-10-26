import { Car } from "../src/models/Car.js";

describe("CarTest", () => {
  test("moveForward", () => {
    const car = new Car("test");
    car.moveForward();
    expect(car.movingForwardCount).toBe(1);

    car.moveForward();
    expect(car.movingForwardCount).toBe(2);
  });
});
