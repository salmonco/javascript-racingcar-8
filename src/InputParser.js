import { Car } from "./Car.js";

export class InputParser {
  #racingCarsInput;

  #tryCountInput;

  constructor(racingCarsInput, tryCountInput) {
    this.#racingCarsInput = racingCarsInput;
    this.#tryCountInput = tryCountInput;
  }

  getRacingCars() {
    const racingCarNames = this.#racingCarsInput.split(",");

    racingCarNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });

    return racingCarNames.map((name) => new Car(name));
  }

  getTryCount() {
    return Number(this.#tryCountInput);
  }
}
