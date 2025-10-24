const CAR_NAME_DELIMITER = ",";

export const InputParser = {
  parseCarNames: (carsInput) => carsInput.split(CAR_NAME_DELIMITER),
  parseTryCount: (tryCountInput) => Number(tryCountInput),
};
