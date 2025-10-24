const CarsInputValidators = {
  CAR_NAME_NOT_EXCEED_5: (carsInput) => {
    const carNames = carsInput.split(",");

    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
  },
};

const TryCountInputValidators = {
  TRY_COUNT_IS_POSITIVE_INTEGER: (tryCountInput) => {
    const tryCount = Number(tryCountInput);

    if (!Number.isInteger(tryCount) || tryCount <= 0) {
      throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
    }
  },
};

export const Validator = {
  validateCarsInput: (carsInput) => {
    Object.values(CarsInputValidators).forEach((validate) =>
      validate(carsInput)
    );
  },
  validateTryCountInput: (tryCountInput) => {
    Object.values(TryCountInputValidators).forEach((validate) =>
      validate(tryCountInput)
    );
  },
};
