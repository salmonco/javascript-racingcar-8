const ERROR_PREFIX = "[ERROR] ";

export const throwError = (message) => {
  throw new Error(`${ERROR_PREFIX}${message}`);
};
