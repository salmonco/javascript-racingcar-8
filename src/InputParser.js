export class InputParser {
  #racingCarNames;

  #tryCount;

  constructor(racingCarsInput, tryCountInput) {
    this.#racingCarNames = this.#parseRacingCarNames(racingCarsInput);
    this.#tryCount = this.#parseTryCount(tryCountInput);

    this.#validateCarNames();
  }

  parse() {
    return {
      racingCarNames: this.#racingCarNames,
      tryCount: this.#tryCount,
    };
  }

  #parseRacingCarNames(racingCarsInput) {
    return racingCarsInput.split(",");
  }

  #parseTryCount(tryCountInput) {
    return Number(tryCountInput);
  }

  #validateCarNames() {
    this.#racingCarNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
  }
}
