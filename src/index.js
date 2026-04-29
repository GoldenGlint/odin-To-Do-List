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
    #itemsList=[];
    #counter=0;
    #projectID=crypto.randomUUID();

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

    get projectID(){
        return this.#projectID;
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
const Darren = new item("Code", "This is a Description", "May 1st", "high");
console.log(Darren);

const Jason = new item("Travel", "This Description", "May 2nd", "low");
console.log(Jason);

const p=new project();
p.addItem(Darren);
p.addItem(Jason);

console.log(p.counter);
console.log(p.itemsList);

const control= new controller();
control.addProject(p);
console.log(control);



const a = new item("a", "This is a fd", "fdsfs 1st", "fd");
console.log(Darren);

const b = new item("fd", "This fds", "May 2nfdsd", "fl");
console.log(Jason);

const c=new project();
c.addItem(a);
c.addItem(b);
control.addProject(c);
console.log(control);
p.removeItem(Darren.getID);
console.log(p);
control.removeProject(c.projectID);
console.log(control);
*/

