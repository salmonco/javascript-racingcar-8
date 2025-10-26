import { MissionUtils } from "@woowacourse/mission-utils";
import { CarList } from "../src/models/CarList.js";

const MOVING_FORWARD = 4;
const STOP = 3;

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

describe("CarListTest", () => {
  let carList;

  beforeEach(() => {
    carList = new CarList(["car1", "car2", "car3"]);
  });

  test("tryMovingForward", () => {
    // given
    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD]);

    // when
    carList.tryMovingForward();

    // then
    const movingForwardCounts = carList.cars.map(
      (car) => car.movingForwardCount
    );
    expect(movingForwardCounts).toEqual([1, 0, 1]);
  });

  test("getWinnerNames", () => {
    // given
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
    ]);

    // when
    carList.tryMovingForward();
    carList.tryMovingForward();
    const winners = carList.getWinnerNames();

    // then
    expect(winners).toEqual(["car1"]);
  });

  test("toString", () => {
    // given
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, STOP]);

    // when
    carList.tryMovingForward();
    const status = carList.toString();

    // then
    expect(status).toBe("car1 : -\ncar2 : -\ncar3 : ");
  });
});
