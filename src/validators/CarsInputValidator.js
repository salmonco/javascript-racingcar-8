import { InputParser } from "../utils/InputParser.js";
import { throwError } from "../utils/throwError.js";

const CAR_NAME_NOT_EXCEED_5_MESSAGE = "자동차 이름은 5자 이하만 가능합니다.";

export const CarsInputValidator = {
  CAR_NAME_NOT_EXCEED_5: (carsInput) => {
    const carNames = InputParser.parseCarNames(carsInput);

    carNames.forEach((name) => {
      if (name.length > 5) {
        throwError(CAR_NAME_NOT_EXCEED_5_MESSAGE);
      }
    });
  },
  // TODO: 자동차 입력값 검증 추가
};
