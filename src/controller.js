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

    findProject(ID){
        const project=this.#projectList.find(project=>project.projectID==ID);
        return project;
    }

    get projectList(){
        return this.#projectList;
    }

    get projectCounter(){
        return this.#projectCounter;
    }

    renderHomepage(){
        render.sidebar(this.projectList,  (id) => {
            const project = this.findProject(id);
            this.renderProject(project)}
        );
        render.mainHeader(this.projectCounter);
        render.projectOverview(this.projectList);
    }
    renderProject(project){
        render.itemOverview(project);
        render.projectSidebar(this.projectList, project, (id) => {
            const project = this.findProject(id);
            this.renderProject(project)}
        );
        render.projectHeader(project.counter);
    }
}