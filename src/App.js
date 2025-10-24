import { Race } from "./controllers/Race.js";

class App {
  async run() {
    const race = new Race();
    await race.start();
  }
}

export default App;
