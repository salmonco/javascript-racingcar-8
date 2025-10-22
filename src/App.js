import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // - 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
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

    // - 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
    const tryCountStr =
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    // - 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
    const checkIsMoving = () => {
      const ramdomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      const isMovingForward = ramdomNumber >= 4;
      return isMovingForward;
    };

    // - 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
    const tryCount = Number(tryCountStr);

    const obj = {};

    MissionUtils.Console.print("\n실행 결과");

    for (let i = 0; i < tryCount; i++) {
      racingCarNames.forEach((name) => {
        if (checkIsMoving()) {
          obj[name] = obj[name] + 1 || 1;
        }
      });

      // - 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
      racingCarNames.forEach((name) => {
        MissionUtils.Console.print(`${name} : ${"-".repeat(obj[name] || 0)}`);
      });

      MissionUtils.Console.print("\n");
    }

    // - 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
    // - 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
    const maxValue = Math.max(...Object.values(obj));
    const winners = Object.entries(obj)
      .filter(([name, value]) => value === maxValue)
      .map(([name]) => name);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
