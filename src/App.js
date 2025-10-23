import { InputParser } from "./InputParser.js";
import { Race } from "./Race.js";
import { readRacingCarsInput, readTryCountInput } from "./io.js";

class App {
  async run() {
    const racingCarsInput = await readRacingCarsInput();
    const tryCountInput = await readTryCountInput();

    const inputParser = new InputParser(racingCarsInput, tryCountInput);
    const { racingCarNames, tryCount } = inputParser.parse();

    const race = new Race(racingCarNames, tryCount);
    race.start();
  }
}

export default App;
