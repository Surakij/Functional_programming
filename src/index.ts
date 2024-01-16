import { sum } from "./sum";
import "./css/style.css";

const h1 = document.body.querySelector("h1");
if (h1) {
  h1.textContent = sum(10, 6).toString();
}
