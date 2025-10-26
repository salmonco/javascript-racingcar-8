import { InputParser } from "../utils/InputParser.js";
import { throwError } from "../utils/throwError.js";

const TRY_COUNT_IS_POSITIVE_INTEGER_MESSAGE =
  "시도 횟수는 양의 정수여야 합니다.";

export const TryCountInputValidator = {
  TRY_COUNT_IS_POSITIVE_INTEGER: (tryCountInput) => {
    const tryCount = InputParser.parseTryCount(tryCountInput);

    if (!Number.isInteger(tryCount) || tryCount <= 0) {
      throwError(TRY_COUNT_IS_POSITIVE_INTEGER_MESSAGE);
    }
  },
  // TODO: 시도 횟수 입력값 검증 추가
};
