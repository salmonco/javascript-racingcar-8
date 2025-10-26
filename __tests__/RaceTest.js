import { MissionUtils } from "@woowacourse/mission-utils";
import { Race } from "../src/controllers/Race.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("RaceTest", () => {
  let race;

  beforeEach(() => {
    race = new Race();
  });

  test("start", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni,tabby", "1"];
    const logs = ["pobi : -", "woni : ", "tabby : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP, STOP]);

    // when
    await race.start();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트 - 자동차 이름은 5자 이하만 가능", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when, then
    await expect(race.start()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 시도 횟수는 양의 정수여야 함", async () => {
    // given
    const inputs = ["pobi,woni", "-1"];
    mockQuestions(inputs);

    // when, then
    await expect(race.start()).rejects.toThrow("[ERROR]");
  });
});
