import { InputParser } from "./InputParser.js";
import { Race } from "./Race.js";
import { readRacingCarsInput, readTryCountInput } from "./io.js";

class App {
  async run() {
    const racingCarsInput = await readRacingCarsInput();
    const tryCountInput = await readTryCountInput();

    const inputParser = new InputParser(racingCarsInput, tryCountInput);
    const racingCars = inputParser.getRacingCars();
    const tryCount = inputParser.getTryCount();

    const race = new Race(racingCars, tryCount);

    race.start();
  }
}

export default App;
