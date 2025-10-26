import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "../src/models/Car.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

describe("CarTest", () => {
  let car;

  beforeEach(() => {
    car = new Car("test");
  });

  test("moveForward - 1회 전진", () => {
    // when
    car.moveForward();

    // then
    expect(car.movingForwardCount).toBe(1);
  });

  test("moveForward - 10회 전진", () => {
    // when
    for (let i = 0; i < 10; i++) {
      car.moveForward();
    }

    // then
    expect(car.movingForwardCount).toBe(10);
  });

  test("checkIsMovingForward - 전진", () => {
    // given
    const MOVING_FORWARD = 4;

    mockRandoms([MOVING_FORWARD]);

    // when, then
    expect(car.checkIsMovingForward()).toBe(true);
  });

  test("checkIsMovingForward - 정지", () => {
    // given
    const STOP = 3;

    mockRandoms([STOP]);

    // when, then
    expect(car.checkIsMovingForward()).toBe(false);
  });
});
