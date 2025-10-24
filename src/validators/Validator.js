import { CarsInputValidator } from "./CarsInputValidator.js";
import { TryCountInputValidator } from "./TryCountInputValidator.js";

export const Validator = {
  validateCarsInput: (carsInput) => {
    Object.values(CarsInputValidator).forEach((validate) =>
      validate(carsInput)
    );
  },
  validateTryCountInput: (tryCountInput) => {
    Object.values(TryCountInputValidator).forEach((validate) =>
      validate(tryCountInput)
    );
  },
};
