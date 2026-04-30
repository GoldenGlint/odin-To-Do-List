



export class project{
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

export class item{
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
