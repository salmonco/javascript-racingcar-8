import { MissionUtils } from "@woowacourse/mission-utils";

const FINAL_WINNER_PREFIX = "최종 우승자 : ";
const WINNER_DELIMITER = ", ";

export const OutputView = {
  printCarsStatus: (racingCars) => {
    MissionUtils.Console.print(racingCars.toString());
    MissionUtils.Console.print("\n");
  },
  printWinner: (racingCars) => {
    const winners = racingCars.getWinnerNames();
    MissionUtils.Console.print(
      `${FINAL_WINNER_PREFIX}${winners.join(WINNER_DELIMITER)}`
    );
  },
};
