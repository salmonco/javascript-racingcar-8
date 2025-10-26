import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "../models/Car.js";
import { InputParser } from "../utils/InputParser.js";
import { Validator } from "../validators/Validator.js";
import { View } from "../views/View.js";

export class Race {
  #MAX_MOVING_FORWARD_NUMBER = 4;

  #racingCars;

  #tryCount;

  async start() {
    const inputs = await this.#readInputs();
    const { carNames, tryCount } = this.#parseInputs(inputs);

    this.#racingCars = this.#makeCarsToRace(carNames);
    this.#tryCount = tryCount;

    this.#moveCars();
  }

  /**
   * 사용자로부터 자동차, 시도 횟수를 입력받기
   * @returns carsInput - 자동차 문자열
   * @returns tryCountInput - 시도 횟수 문자열
   */
  async #readInputs() {
    const carsInput = await View.input.readCarsInput();
    Validator.validateCarsInput(carsInput);

    const tryCountInput = await View.input.readTryCountInput();
    Validator.validateTryCountInput(tryCountInput);

    return { carsInput, tryCountInput };
  }

  /**
   * 입력값 파싱하기
   * @param carsInput - 자동차 문자열
   * @param tryCountInput - 시도 횟수 문자열
   * @returns carNames - 자동차 이름 배열
   * @returns tryCount - 시도 횟수 숫자
   */
  #parseInputs({ carsInput, tryCountInput }) {
    const carNames = InputParser.parseCarNames(carsInput);
    const tryCount = InputParser.parseTryCount(tryCountInput);

    return { carNames, tryCount };
  }

  /**
   * 자동차 객체 배열 생성하기
   * @param carNames - 자동차 이름 배열
   * @returns 자동차 객체 배열
   */
  #makeCarsToRace(carNames) {
    return carNames.map((name) => new Car(name));
  }

  /**
   * 자동차 이동시키기
   * - 개별 자동차에 대해 전진 여부 확인 후 전진
   * - 매 시도 후 자동차 상태 출력
   * - 모든 시도 후 우승자 출력
   */
  #moveCars() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.#racingCars.forEach((car) => {
        if (this.#checkIsCarMovingForward()) {
          car.moveForward();
        }
      });
      View.output.printCarsStatus(this.#racingCars);
    }
    View.output.printWinner(this.#racingCars);
  }

  /**
   * 자동차 전진 여부 확인하기
   * - 전진 조건: 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 MAX_MOVING_FORWARD_NUMBER 이상일 경우
   * @returns 전진 여부 boolean
   */
  #checkIsCarMovingForward() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    const isMovingForward = randomNumber >= this.#MAX_MOVING_FORWARD_NUMBER;
    return isMovingForward;
  }
}
