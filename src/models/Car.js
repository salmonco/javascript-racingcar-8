import { MissionUtils } from "@woowacourse/mission-utils";

export class Car {
  #MAX_MOVING_FORWARD_NUMBER = 4;

  #name;

  #movingForwardCount = 0;

  constructor(name) {
    this.#name = name;
  }

  /**
   * 1회 전진
   */
  moveForward() {
    this.#movingForwardCount += 1;
  }

  /**
   * 전진 여부 확인하기
   * - 전진 조건: 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 MAX_MOVING_FORWARD_NUMBER 이상일 경우
   * @returns 전진 여부 boolean
   */
  checkIsMovingForward() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    const isMovingForward = randomNumber >= this.#MAX_MOVING_FORWARD_NUMBER;
    return isMovingForward;
  }

  get movingForwardCount() {
    return this.#movingForwardCount;
  }

  get name() {
    return this.#name;
  }
}
