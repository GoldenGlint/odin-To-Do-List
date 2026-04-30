import {project, item} from "./classes.js";
import {render} from "./render.js";
export class controller{
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

    get projectList(){
        return this.#projectList;
    }

    get projectCounter(){
        return this.#projectCounter;
    }
}