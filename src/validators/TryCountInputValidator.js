import { InputParser } from "../utils/InputParser.js";
import { throwError } from "../utils/throwError.js";

const TRY_COUNT_ERROR_MESSAGE = {
  TRY_COUNT_IS_POSITIVE_INTEGER: "시도 횟수는 양의 정수여야 합니다.",
};

export const TryCountInputValidator = {
  TRY_COUNT_IS_POSITIVE_INTEGER: (tryCountInput) => {
    const tryCount = InputParser.parseTryCount(tryCountInput);

    if (!Number.isInteger(tryCount) || tryCount <= 0) {
      throwError(TRY_COUNT_ERROR_MESSAGE.TRY_COUNT_IS_POSITIVE_INTEGER);
    }
  },
};
