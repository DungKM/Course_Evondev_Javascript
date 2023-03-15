import Navigo from "navigo";
const router = new Navigo("/", {linksSelector: "a", hash: true });
const render = (component, container) => {
  container.innerHTML = component();
};

export { router, render };
