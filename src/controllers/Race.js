import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "../models/Car.js";
import { InputParser } from "../utils/InputParser.js";
import { Validator } from "../utils/Validator.js";
import { View } from "../views/View.js";

export class Race {
  #racingCars;

  #tryCount;

  async start() {
    const inputs = await this.#readInputs();
    const { carNames, tryCount } = this.#parseInputs(inputs);

    this.#racingCars = this.#makeCarsToRace(carNames);
    this.#tryCount = tryCount;

    this.#moveCars();
  }

  async #readInputs() {
    const carsInput = await View.input.readCarsInput();
    Validator.validateCarsInput(carsInput);

    const tryCountInput = await View.input.readTryCountInput();
    Validator.validateTryCountInput(tryCountInput);

    return { carsInput, tryCountInput };
  }

  #parseInputs({ carsInput, tryCountInput }) {
    const carNames = InputParser.parseCarNames(carsInput);
    const tryCount = InputParser.parseTryCount(tryCountInput);

    return { carNames, tryCount };
  }

  #makeCarsToRace(carNames) {
    return carNames.map((name) => new Car(name));
  }

  #moveCars() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.#racingCars.forEach((car) => {
        if (this.#checkIsCarMoving()) {
          car.move();
        }
      });
      View.output.printCarsStatus(this.#racingCars);
    }
    View.output.printWinner(this.#racingCars);
  }

  #checkIsCarMoving() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    const isMovingForward = randomNumber >= 4;
    return isMovingForward;
  }
}
