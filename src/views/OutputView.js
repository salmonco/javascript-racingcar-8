import { MissionUtils } from "@woowacourse/mission-utils";

const OUTPUT_MESSAGE = {
  FINAL_WINNER: "최종 우승자 : ",
  WINNERS_DELIMITER: ", ",
  MOVING_FORWARD_SYMBOL: "-",
};

export const OutputView = {
  printCarsStatus: (racingCars) => {
    racingCars.forEach((car) => {
      MissionUtils.Console.print(
        `${car.name} : ${OUTPUT_MESSAGE.MOVING_FORWARD_SYMBOL.repeat(car.movingCount)}`
      );
    });
    MissionUtils.Console.print("\n");
  },

  printWinner: (racingCars) => {
    const maxValue = Math.max(...racingCars.map((car) => car.movingCount));
    const winners = racingCars
      .filter((car) => car.movingCount === maxValue)
      .map((car) => car.name);
    MissionUtils.Console.print(
      `${OUTPUT_MESSAGE.FINAL_WINNER}${winners.join(OUTPUT_MESSAGE.WINNERS_DELIMITER)}`
    );
  },
};
