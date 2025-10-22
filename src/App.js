import { MissionUtils } from "@woowacourse/mission-utils";
import { InputParser } from "./InputParser.js";
import { Race } from "./Race.js";

class App {
  async run() {
    const racingCarsInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const tryCountInput =
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    const inputParser = new InputParser(racingCarsInput, tryCountInput);
    const racingCars = inputParser.getRacingCars();
    const tryCount = inputParser.getTryCount();

    const race = new Race(racingCars, tryCount);

    race.start();
  }
}

export default App;
