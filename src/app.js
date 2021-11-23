import styles from "./style.module.css";

const header = document.createElement("h1");

header.innerHTML = "Hello world";
header.className = styles.test;

document.body.appendChild(header);
