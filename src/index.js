import "./styles.css";
console.log("Hello World");

class project{
    #itemsList=[];
    #counter=0;

    addItem(item){
        this.#itemsList.push(item);
        this.#counter++;
    }

    removeItem(ID){
        this.#itemsList=this.#itemsList.filter(item=>item.getID!=ID);
        this.#counter--;
    }

    get counter(){
        return this.#counter;
    }

    get itemsList(){
        return this.#itemsList;
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




/* Testing Code
const Darren = new item("Code", "This is a Description", "May 1st", "high");
console.log(Darren);
console.log(Darren.priority);
Darren.priority="low";
console.log(Darren.priority)
*/

const Darren = new item("Code", "This is a Description", "May 1st", "high");
console.log(Darren);

const Jason = new item("Travel", "This Description", "May 2nd", "low");
console.log(Jason);

const p=new project();
p.addItem(Darren);
p.addItem(Jason);

console.log(p.counter);
console.log(p.itemsList);