import { Car } from "./Car.js";

const CAR_STATUS_DELIMITER = "\n";

export class CarList {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  tryMovingForward() {
    this.#cars.forEach((car) => {
      car.tryMovingForward();
    });
  }

  getWinnerNames() {
    const maxCount = this.#getMaxMovingForwardCount();
    const winners = this.#cars
      .filter((car) => car.movingForwardCount === maxCount)
      .map((car) => car.name);
    return winners;
  }

  toString() {
    return this.#cars.map((car) => car.toString()).join(CAR_STATUS_DELIMITER);
  }

  #getMaxMovingForwardCount() {
    return Math.max(...this.#cars.map((car) => car.movingForwardCount));
  }
}
