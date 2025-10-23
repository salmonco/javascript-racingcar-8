import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "./Car.js";

export class Race {
  #racingCars;

  #tryCount;

  constructor(racingCarNames, tryCount) {
    this.#racingCars = this.#makeCars(racingCarNames);
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

  #makeCars(racingCarNames) {
    return racingCarNames.map((name) => new Car(name));
  }

  #checkIsMoving() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    const isMovingForward = randomNumber >= 4;
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
