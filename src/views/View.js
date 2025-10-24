import { MissionUtils } from "@woowacourse/mission-utils";

const RACING_CARS_INPUT_MESSAGE =
  "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";

const TRY_COUNT_INPUT_MESSAGE = "시도할 횟수는 몇 회인가요?\n";

export const View = {
  input: {
    readCarsInput: () =>
      MissionUtils.Console.readLineAsync(RACING_CARS_INPUT_MESSAGE),
    readTryCountInput: () =>
      MissionUtils.Console.readLineAsync(TRY_COUNT_INPUT_MESSAGE),
  },
  output: {
    printCarsStatus: (racingCars) => {
      racingCars.forEach((car) => {
        MissionUtils.Console.print(
          `${car.name} : ${"-".repeat(car.movingCount)}`
        );
      });
      MissionUtils.Console.print("\n");
    },
    printWinner: (racingCars) => {
      const maxValue = Math.max(...racingCars.map((car) => car.movingCount));
      const winners = racingCars
        .filter((car) => car.movingCount === maxValue)
        .map((car) => car.name);
      MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
    },
  },
};
