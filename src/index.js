import "./styles.css";
console.log("Hello World");

class controller{
    #projectList=[];
    #projectCounter=0;

    addProject(project){
        this.#projectList.push(project);
        this.#projectCounter++;
    }

    removeProject(ID){
        this.#projectList=this.#projectList.filter(project=>project.projectID!=ID);
        this.#projectCounter--;
    }
}

class project{
    #name;
    #itemsList=[];
    #counter=0;
    #projectID=crypto.randomUUID();
    #description;

    constructor(name, description){
        this.#name=name;
        this.#description=description;
    }
    addItem(item){
        this.#itemsList.push(item);
        this.#counter++;
    }

    removeItem(ID){
        this.#itemsList=this.#itemsList.filter(item=>item.getID!=ID);
        this.#counter--;
    }

    get name(){
        return this.#name;
    }

    set name(n){
        this.#name=n;
    }

    get counter(){
        return this.#counter;
    }

    get itemsList(){
        return this.#itemsList;
    }

    get projectID(){
        return this.#projectID;
    }

    get description(){
        return this.#description;
    }

    set description(d){
        this.#description=d;
    }
    
}

class item{
    #ID;
    #title;
    #description;
    #dueDate;
    #priority;
    
    constructor(title, description, dueDate, priority, options = {}){
        this.#ID=crypto.randomUUID();
        this.#title=title;
        this.#description=description;
        this.#dueDate=dueDate;
        this.#priority=priority;

        //optional things

    }

    get title(){
        return this.#title;
    }

    set title(value){
        this.#title=value;
    }

    get description(){
        return this.#description;
    }

    set description(value){
        this.#description=value;
    }

    get dueDate(){
        return this.#dueDate;
    }

    set dueDate(value){
        this.#dueDate=value;
    }

    get priority(){
        return this.#priority;
    }

    set priority(value){
        this.#priority=value;
    }

    get getID(){
        return this.#ID;
    }
}


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

