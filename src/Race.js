import { MissionUtils } from "@woowacourse/mission-utils";

export class Race {
  #racingCars;

  #tryCount;

  constructor(racingCars, tryCount) {
    this.#racingCars = racingCars;
    this.#tryCount = tryCount;
  }

  start() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.#racingCars.forEach((car) => {
        if (this.#checkIsMoving()) {
          car.move();
        }
      });
      this.#printStatus();
    }
    this.#printResult();
  }

  #checkIsMoving() {
    const ramdomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    const isMovingForward = ramdomNumber >= 4;
    return isMovingForward;
  }

  #printStatus() {
    this.#racingCars.forEach((car) => {
      MissionUtils.Console.print(
        `${car.name} : ${"-".repeat(car.movingCount)}`
      );
    });
    MissionUtils.Console.print("\n");
  }

  #printResult() {
    const maxValue = Math.max(
      ...this.#racingCars.map((car) => car.movingCount)
    );
    const winners = this.#racingCars
      .filter((car) => car.movingCount === maxValue)
      .map((car) => car.name);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
