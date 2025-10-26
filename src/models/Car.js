export class Car {
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

  get movingForwardCount() {
    return this.#movingForwardCount;
  }

  get name() {
    return this.#name;
  }
}
