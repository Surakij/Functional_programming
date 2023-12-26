import { sum } from "./sum";
import "./css/style.css";

const h1 = document.body.querySelector("h1");
h1.innerText = sum(5, 6);
