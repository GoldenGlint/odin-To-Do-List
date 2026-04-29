import "./styles.css";
console.log("Hello World");

class item{
    #id;
    #title;
    #description;
    #dueDate;
    #priority;
    
    constructor(title, description, dueDate, priority){
        this.#id=crypto.randomUUID();
        this.#title=title;
        this.#description=description;
        this.#dueDate=dueDate;
        this.#priority=priority;
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
}



/* Testing Code
const Darren = new item("Code", "This is a Description", "May 1st", "high");
console.log(Darren);
console.log(Darren.priority);
Darren.priority="low";
console.log(Darren.priority)
*/