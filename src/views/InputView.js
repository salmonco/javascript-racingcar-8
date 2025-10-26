import { MissionUtils } from "@woowacourse/mission-utils";

const RACING_CARS_MESSAGE =
  "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";

const TRY_COUNT_MESSAGE = "시도할 횟수는 몇 회인가요?\n";

export const InputView = {
  readCarsInput: () => MissionUtils.Console.readLineAsync(RACING_CARS_MESSAGE),
  readTryCountInput: () =>
    MissionUtils.Console.readLineAsync(TRY_COUNT_MESSAGE),
};
