import { MissionUtils } from "@woowacourse/mission-utils";

const MAX_MOVING_FORWARD_NUMBER = 4;

const MOVING_FORWARD_SYMBOL = "-";

export class Car {
  #name;

  #movingForwardCount = 0;

  constructor(name) {
    this.#name = name;
  }

  /**
   * 전진 or 정지
   */
  tryMovingForward() {
    if (this.#checkIsMovingForward()) {
      this.#moveForward();
    }
  }

  /**
   * @returns 자동차 상태 문자열
   */
  toString() {
    return `${this.#name} : ${MOVING_FORWARD_SYMBOL.repeat(this.#movingForwardCount)}`;
  }

  /**
   * 1회 전진
   */
  #moveForward() {
    this.#movingForwardCount += 1;
  }

  /**
   * 전진 여부 확인하기
   * - 전진 조건: 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 MAX_MOVING_FORWARD_NUMBER 이상일 경우
   * @returns 전진 여부 boolean
   */
  #checkIsMovingForward() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    const isMovingForward = randomNumber >= MAX_MOVING_FORWARD_NUMBER;
    return isMovingForward;
  }

  get movingForwardCount() {
    return this.#movingForwardCount;
  }

  get name() {
    return this.#name;
  }
}
