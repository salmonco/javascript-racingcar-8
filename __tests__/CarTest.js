import { Car } from "../src/models/Car.js";

describe("CarTest", () => {
  let car;

  beforeEach(() => {
    car = new Car("test");
  });

  test("moveForward - 1회 전진", () => {
    car.moveForward();
    expect(car.movingForwardCount).toBe(1);
  });

  test("moveForward - 10회 전진", () => {
    for (let i = 0; i < 10; i++) {
      car.moveForward();
    }
    expect(car.movingForwardCount).toBe(10);
  });
});
