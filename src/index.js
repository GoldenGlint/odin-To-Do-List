import "./styles.css";
import {controller} from "./controller.js";
import {project, item} from "./classes.js";
import { render } from "./render";
console.log("Hello World");



//Terminal Location: http://localhost:8080

/* Testing Code
const control = new controller();

const p = new project("Work", "Work related tasks");
const c = new project("Personal", "Personal tasks");

const item1 = new item("Code review", "Review pull requests", "May 1st", "high");
const item2 = new item("Team meeting", "Weekly sync", "May 2nd", "low");
const item3 = new item("Grocery run", "Buy food", "May 3rd", "medium");

p.addItem(item1);
p.addItem(item2);
c.addItem(item3);

control.addProject(p);
control.addProject(c);

console.log("--- Projects ---");
console.log(p.name, p.description, p.counter);
console.log(c.name, c.description, c.counter);

console.log("--- Items ---");
console.log(item1.title, item1.priority, item1.getID);

console.log("--- Remove item ---");
p.removeItem(item1.getID);
console.log(p.counter);

console.log("--- Remove project ---");
control.removeProject(c.projectID);
console.log(control);
*/

const control = new controller();

const p = new project("Work", "Work related tasks");
const c = new project("Personal", "Personal tasks");

const item1 = new item("Code review", "Review pull requests", new Date(2026,4,6), "high");
const item2 = new item("Team meeting", "Weekly sync", new Date(2026,6,5), "low");
const item3 = new item("Grocery run", "Buy food", new Date(2026,4,6), "medium");

p.addItem(item1);
p.addItem(item2);
c.addItem(item3);

control.addProject(p);
control.addProject(c);

console.log("--- Projects ---");
console.log(p.name, p.description, p.counter);
console.log(c.name, c.description, c.counter);

console.log("--- Items ---");
console.log(item1.title, item1.priority, item1.getID);

console.log("--- Remove item ---");

console.log(p.counter);

console.log("--- Remove project ---");

console.log(control);

control.renderHomepage();

