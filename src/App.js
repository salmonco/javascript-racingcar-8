import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "./Car.js";
import { Race } from "./Race.js";

class App {
  async run() {
    const racingCarNameStr = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const racingCarNames = racingCarNameStr.split(",");

    racingCarNames.forEach((name) => {
      if (name.length > 5) {
        // - 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });

    const racingCars = racingCarNames.map((name) => new Car(name));

    const tryCountStr =
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    const tryCount = Number(tryCountStr);

    const race = new Race(racingCars, tryCount);

    race.start();
  }
}

export default App;
