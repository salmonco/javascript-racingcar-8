export class Car {
  #name;

  #movingCount = 0;

  constructor(name) {
    this.#name = name;
  }

  movingForward() {
    this.#movingCount += 1;
  }

  get movingCount() {
    return this.#movingCount;
  }

  get name() {
    return this.#name;
  }
}
