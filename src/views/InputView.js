import { MissionUtils } from "@woowacourse/mission-utils";

const INPUT_MESSAGE = {
  RACING_CARS:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
};

export const InputView = {
  readCarsInput: () =>
    MissionUtils.Console.readLineAsync(INPUT_MESSAGE.RACING_CARS),
  readTryCountInput: () =>
    MissionUtils.Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT),
};
