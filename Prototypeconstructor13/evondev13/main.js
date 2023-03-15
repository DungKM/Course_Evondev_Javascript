
import { render, router } from "./lib";
import StarterPage from "./pages/constructorFunction";
import HomePage from "./pages/home";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/292", () => render(StarterPage, app));


router.resolve();
