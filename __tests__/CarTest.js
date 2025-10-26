import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "../src/models/Car.js";

const MOVING_FORWARD = 4;
const STOP = 3;

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

  test("tryMovingForward - 전진", () => {
    // given
    mockRandoms([MOVING_FORWARD]);

    // when
    car.tryMovingForward();

    // then
    expect(car.movingForwardCount).toBe(1);
  });

  test("tryMovingForward - 정지", () => {
    // given
    mockRandoms([STOP]);

    // when
    car.tryMovingForward();

    // then
    expect(car.movingForwardCount).toBe(0);
  });

  test("toString", () => {
    // given
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]);

    // when
    car.tryMovingForward();
    car.tryMovingForward();
    car.tryMovingForward();
    const carStatus = car.toString();

    // then
    expect(carStatus).toBe("test : ---");
  });
});
